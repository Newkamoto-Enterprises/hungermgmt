import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../script.js", import.meta.url), "utf8");

const fakeElement = {
  children: [],
  classList: { add() {}, remove() {} },
  innerHTML: "",
};

const context = {
  alert() {},
  console,
  document: {
    body: fakeElement,
    getElementById() {
      return fakeElement;
    },
    querySelectorAll() {
      return [];
    },
  },
  Image: class Image {},
  navigator: {
    clipboard: {
      writeText() {
        return Promise.resolve();
      },
    },
  },
  setTimeout() {},
  window: {
    addEventListener() {},
    location: { hash: "", href: "https://example.test/" },
    scrollTo() {},
  },
};

vm.runInNewContext(`${source}\nglobalThis.__models = models;`, context);

const rosterIds = context.__models.map((model) => model.id);

assert.ok(rosterIds.includes("long"), "long should remain in the roster");
assert.ok(!rosterIds.includes("matt"), "matt should be removed from the roster");
