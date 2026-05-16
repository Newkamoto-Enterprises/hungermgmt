import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

const pageUrl = new URL("../index.html", import.meta.url).href;

async function assertVersionedStaticAssets(page) {
  const assets = await page.evaluate(() => ({
    stylesheet: document.querySelector('link[rel="stylesheet"]')?.getAttribute("href"),
    script: document.querySelector("script[src]")?.getAttribute("src"),
  }));

  assert.match(
    assets.stylesheet ?? "",
    /^style\.css\?v=.+/,
    `stylesheet should use a versioned URL, got ${assets.stylesheet}`,
  );
  assert.match(
    assets.script ?? "",
    /^script\.js\?v=.+/,
    `script should use a versioned URL, got ${assets.script}`,
  );
}

function assertMonochromeColor(color, label) {
  const normalized = color.replace(/\s+/g, "");
  assert.match(
    normalized,
    /^rgba?\((0,0,0|255,255,255)(,(0|1))?\)$/,
    `${label} should render black or white, got ${color}`,
  );
}

async function assertNoHorizontalScroll(page, label) {
  const metrics = await page.evaluate(() => ({
    viewportWidth: window.innerWidth,
    docWidth: document.documentElement.scrollWidth,
    bodyWidth: document.body.scrollWidth,
  }));

  assert.ok(
    metrics.docWidth <= metrics.viewportWidth && metrics.bodyWidth <= metrics.viewportWidth,
    `${label} has horizontal overflow: viewport=${metrics.viewportWidth}, document=${metrics.docWidth}, body=${metrics.bodyWidth}`,
  );
}

async function assertVisibleTextIsMonochrome(page, label) {
  const colors = await page.evaluate(() =>
    Array.from(document.querySelectorAll("body *"))
      .filter((element) => {
        const style = window.getComputedStyle(element);
        return (
          element.textContent.trim().length > 0 &&
          style.display !== "none" &&
          style.visibility !== "hidden"
        );
      })
      .map((element) => ({
        text: element.textContent.trim(),
        color: window.getComputedStyle(element).color,
      })),
  );

  for (const item of colors) {
    assertMonochromeColor(item.color, `${label} ${item.text || "control"}`);
  }
}

async function assertExcludedModelsAreAbsent(page) {
  const modelNames = await page.evaluate(() =>
    Array.from(document.querySelectorAll(".model-name"), (element) => element.textContent.trim()),
  );

  assert.ok(!modelNames.includes("ESMERALDA"), "Esmeralda should not appear in the homepage roster");
}

async function assertModelNameUsesDifferenceBlend(page) {
  const treatment = await page.locator(".model-name").first().evaluate((element) => {
    const style = window.getComputedStyle(element);
    return {
      backgroundColor: style.backgroundColor,
      borderStyle: style.borderStyle,
      boxShadow: style.boxShadow,
      backdropFilter: style.backdropFilter || style.webkitBackdropFilter,
      mixBlendMode: style.mixBlendMode,
    };
  });

  assert.ok(
    treatment.backgroundColor === "rgba(0, 0, 0, 0)" || treatment.backgroundColor === "transparent",
    `model name should have no background, got ${treatment.backgroundColor}`,
  );
  assert.equal(
    treatment.borderStyle,
    "none",
    `model name should have no border, got ${treatment.borderStyle}`,
  );
  assert.equal(
    treatment.boxShadow,
    "none",
    `model name should have no shadow box, got ${treatment.boxShadow}`,
  );
  assert.equal(
    treatment.backdropFilter,
    "none",
    `model name should not use background blur, got ${treatment.backdropFilter}`,
  );
  assert.equal(
    treatment.mixBlendMode,
    "difference",
    `model name should use difference blend mode, got ${treatment.mixBlendMode}`,
  );
}

const launchOptions = {};
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

if (process.platform === "darwin" && existsSync(chromePath)) {
  launchOptions.executablePath = chromePath;
}

const browser = await chromium.launch(launchOptions);

try {
  const page = await browser.newPage({ viewport: { width: 320, height: 700 } });
  await page.goto(pageUrl);
  await assertVersionedStaticAssets(page);
  await page.waitForSelector(".model-card");

  await assertNoHorizontalScroll(page, "mobile homepage");
  await assertVisibleTextIsMonochrome(page, "mobile homepage");
  await assertExcludedModelsAreAbsent(page);
  await assertModelNameUsesDifferenceBlend(page);

  await page.locator(".model-card").first().click();
  await page.waitForSelector(".profile-name");

  await assertNoHorizontalScroll(page, "mobile profile");
  await assertVisibleTextIsMonochrome(page, "mobile profile");

  const profileNameBox = await page.locator(".profile-name").boundingBox();
  assert.ok(profileNameBox, "profile name should be visible on mobile");
  assert.ok(
    profileNameBox.y <= 24,
    `profile name should sit at the top of the mobile profile, got y=${profileNameBox.y}`,
  );

  await page.evaluate(() => {
    const scroller = document.querySelector(".profile-container");
    scroller.scrollTo(0, scroller.scrollHeight);
  });
  const homeCard = page.locator(".mobile-home-card");
  await expectVisible(homeCard, "mobile bottom back-home card should be visible");

  const cardBox = await homeCard.boundingBox();
  assert.ok(cardBox, "mobile bottom back-home card should have layout");
  assert.ok(
    cardBox.y < 700 && cardBox.y + cardBox.height > 0,
    `mobile bottom back-home card should be in the viewport after scrolling the profile, got y=${cardBox.y}`,
  );
  assert.ok(
    cardBox.width >= 300,
    `mobile bottom back-home card should span the available width, got ${cardBox.width}px`,
  );

  await homeCard.click();
  await page.waitForFunction(() => window.location.hash === "");
  assert.ok(await page.locator(".grid-container").isVisible(), "clicking the bottom card should return home");

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(pageUrl);
  await page.waitForSelector(".model-card");
  await assertNoHorizontalScroll(page, "desktop homepage");
} finally {
  await browser.close();
}

async function expectVisible(locator, message) {
  try {
    await locator.waitFor({ state: "visible", timeout: 1000 });
  } catch {
    assert.fail(message);
  }
}
