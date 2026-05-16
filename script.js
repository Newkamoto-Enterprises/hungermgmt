function generatedModel(id, name, stats, skills) {
    return {
        id,
        name,
        mainImage: `models photos/generated/${id}_portrait.png`,
        thumbnail: `models photos/generated/${id}_portrait.png`,
        images: [
            `models photos/generated/${id}_fullbody.png`,
            `models photos/generated/${id}_angle.png`,
            `models photos/generated/${id}_polaroid.png`
        ],
        stats,
        skills
    };
}

const models = [
    {
        id: "alassane",
        name: "ALASSANE",
        mainImage: "models photos/alassane_thumb.png",
        thumbnail: "models photos/alassane_thumb.png",
        images: ["models photos/alassane_fullbody_1.png", "models photos/alassane_side_1.png"],
        stats: { height: "185cm", chest: "94cm", waist: "74cm", hips: "92cm", shoes: "43" },
        skills: "Editorial, Avant-Garde"
    },
    generatedModel(
        "alina",
        "ALINA",
        { height: "178cm", bust: "80cm", waist: "59cm", hips: "88cm", shoes: "39" },
        "Editorial, Runway"
    ),
    generatedModel(
        "alex",
        "ALEX",
        { height: "181cm", chest: "89cm", waist: "70cm", hips: "88cm", shoes: "42" },
        "Editorial, Casting"
    ),
    {
        id: "angelina",
        name: "ANGELINA",
        mainImage: "models photos/angelina_thumb.png",
        thumbnail: "models photos/angelina_thumb.png",
        images: ["models photos/angelina_fullbody_1.png", "models photos/angelina_side_1.png"],
        stats: { height: "173cm", bust: "78cm", waist: "58cm", hips: "86cm", shoes: "38" },
        skills: "Commercial, Editorial"
    },
    {
        id: "anton",
        name: "ANTON",
        mainImage: "models photos/anton_thumb.png",
        thumbnail: "models photos/anton_thumb.png",
        images: ["models photos/anton_fullbody_1.png", "models photos/anton_side_1.png"],
        stats: { height: "188cm", chest: "96cm", waist: "78cm", hips: "94cm", shoes: "44" },
        skills: "Runway, Editorial"
    },
    generatedModel(
        "chloe",
        "CHLOE",
        { height: "176cm", bust: "79cm", waist: "60cm", hips: "88cm", shoes: "39" },
        "Editorial, Runway"
    ),
    {
        id: "arthur",
        name: "ARTHUR",
        mainImage: "models photos/d9ecf849-a84d-46d4-bc47-622d793b87cc 1.png",
        thumbnail: "models photos/arthur_thumb.png",
        images: ["models photos/arthur_fullbody_1.png", "models photos/arthur_side_1.png"],
        stats: { height: "184cm", chest: "93cm", waist: "73cm", hips: "91cm", shoes: "42" },
        skills: "Runway, Print, Acting"
    },
    generatedModel(
        "aylin",
        "AYLIN",
        { height: "174cm", bust: "79cm", waist: "59cm", hips: "87cm", shoes: "38" },
        "Editorial, Commercial"
    ),
    {
        id: "colborn",
        name: "COLBORN",
        mainImage: "models photos/c77db1b4-d26f-40e5-9b24-bcf5e3e2237c 1.png",
        thumbnail: "models photos/colborn_thumb.png",
        images: ["models photos/colborn_fullbody_1.png", "models photos/colborn_side_1.png"],
        stats: { height: "187cm", chest: "94cm", waist: "74cm", hips: "92cm", shoes: "44" },
        skills: "Avant-Garde, Editorial"
    },
    {
        id: "dan",
        name: "DAN",
        mainImage: "models photos/c1535d08-8af6-4173-b388-85c2e1893412 1.png",
        thumbnail: "models photos/dan_thumb.png",
        images: ["models photos/dan_fullbody_1.png", "models photos/dan_side_1.png"],
        stats: { height: "185cm", chest: "95cm", waist: "75cm", hips: "93cm", shoes: "43" },
        skills: "Classic, Suit, Commercial"
    },
    generatedModel(
        "daisy",
        "DAISY",
        { height: "175cm", bust: "80cm", waist: "60cm", hips: "88cm", shoes: "39" },
        "Editorial, Casting"
    ),
    generatedModel(
        "elena",
        "ELENA",
        { height: "176cm", bust: "81cm", waist: "60cm", hips: "88cm", shoes: "39" },
        "Editorial, Casting"
    ),
    generatedModel(
        "erica",
        "ERICA",
        { height: "174cm", bust: "81cm", waist: "61cm", hips: "89cm", shoes: "39" },
        "Editorial, Casting"
    ),
    {
        id: "erik",
        name: "ERIK",
        mainImage: "models photos/erik_thumb.png",
        thumbnail: "models photos/erik_thumb.png",
        images: ["models photos/erik_fullbody_1.png", "models photos/erik_side_1.png"],
        stats: { height: "182cm", chest: "92cm", waist: "72cm", hips: "90cm", shoes: "43" },
        skills: "Editorial, Commercial"
    },
    {
        id: "ethan",
        name: "ETHAN",
        mainImage: "models photos/ethan_thumb.png",
        thumbnail: "models photos/ethan_thumb.png",
        images: ["models photos/ethan_fullbody_1.png", "models photos/ethan_side_1.png"],
        stats: { height: "184cm", chest: "91cm", waist: "71cm", hips: "89cm", shoes: "43" },
        skills: "Streetwear, Music"
    },
    generatedModel(
        "eva",
        "EVA",
        { height: "175cm", bust: "80cm", waist: "60cm", hips: "88cm", shoes: "39" },
        "Editorial, Casting"
    ),
    generatedModel(
        "geoffrey",
        "GEOFFREY",
        { height: "192cm", chest: "92cm", waist: "76cm", hips: "90cm", shoes: "45" },
        "Runway, High Fashion"
    ),
    generatedModel(
        "frida",
        "FRIDA",
        { height: "178cm", bust: "80cm", waist: "60cm", hips: "88cm", shoes: "39" },
        "Runway, Editorial"
    ),
    {
        id: "harper",
        name: "HARPER",
        mainImage: "models photos/6bdeefaf-7de6-4047-ae68-f4c5ad766373 1.png",
        thumbnail: "models photos/harper_thumb.png",
        images: ["models photos/harper_fullbody_2.png", "models photos/harper_side_1.png"],
        stats: { height: "176cm", bust: "82cm", waist: "63cm", hips: "89cm", shoes: "38" },
        skills: "Editorial, Catalog, Swim"
    },
    generatedModel(
        "harry",
        "HARRY",
        { height: "188cm", chest: "96cm", waist: "77cm", hips: "92cm", shoes: "44" },
        "Editorial, Casting"
    ),
    generatedModel(
        "imani",
        "IMANI",
        { height: "177cm", bust: "82cm", waist: "62cm", hips: "90cm", shoes: "39" },
        "Editorial, Commercial"
    ),
    generatedModel(
        "jabari",
        "JABARI",
        { height: "188cm", chest: "95cm", waist: "76cm", hips: "92cm", shoes: "44" },
        "Editorial, Runway"
    ),
    {
        id: "isabel",
        name: "ISABEL",
        mainImage: "models photos/isabel_thumb.png",
        thumbnail: "models photos/isabel_thumb.png",
        images: ["models photos/isabel_fullbody_1.png", "models photos/isabel_side_1.png"],
        stats: { height: "176cm", bust: "80cm", waist: "60cm", hips: "88cm", shoes: "39" },
        skills: "High Fashion, Editorial"
    },
    generatedModel(
        "james",
        "JAMES",
        { height: "186cm", chest: "93cm", waist: "74cm", hips: "91cm", shoes: "44" },
        "Runway, Editorial"
    ),
    generatedModel(
        "jose",
        "JOSE",
        { height: "184cm", chest: "90cm", waist: "71cm", hips: "89cm", shoes: "43" },
        "Editorial, Casting"
    ),
    {
        id: "kareem",
        name: "KAREEM",
        mainImage: "models photos/kareem_thumb.png",
        thumbnail: "models photos/kareem_thumb.png",
        images: ["models photos/kareem_fullbody_1.png", "models photos/kareem_side_1.png"],
        stats: { height: "181cm", chest: "90cm", waist: "70cm", hips: "88cm", shoes: "42" },
        skills: "Commercial, Streetwear"
    },
    {
        id: "leonid",
        name: "LEONID",
        mainImage: "models photos/41a6a2eb-17d5-493e-9d1c-650fc2dbc692 1.png",
        thumbnail: "models photos/leonid_thumb.png",
        images: ["models photos/leonid_fullbody_1.png", "models photos/leonid_side_1.png"],
        stats: { height: "186cm", chest: "96cm", waist: "76cm", hips: "94cm", shoes: "44" },
        skills: "Sports, Commercial, Acting"
    },
    generatedModel(
        "liam",
        "LIAM",
        { height: "183cm", chest: "91cm", waist: "72cm", hips: "90cm", shoes: "43" },
        "Editorial, Commercial"
    ),
    generatedModel(
        "lily",
        "LILY",
        { height: "176cm", bust: "79cm", waist: "59cm", hips: "87cm", shoes: "39" },
        "Editorial, High Fashion"
    ),
    generatedModel(
        "long",
        "LÓNG",
        { height: "183cm", chest: "90cm", waist: "71cm", hips: "89cm", shoes: "43" },
        "Editorial, Casting"
    ),
    {
        id: "margareth",
        name: "MARGARETH",
        mainImage: "models photos/margareth_thumb.png",
        thumbnail: "models photos/margareth_thumb.png",
        images: ["models photos/margareth_fullbody_1.png", "models photos/margareth_side_1.png"],
        stats: { height: "177cm", bust: "81cm", waist: "61cm", hips: "89cm", shoes: "39" },
        skills: "Editorial, Runway"
    },
    generatedModel(
        "marco",
        "MARCO",
        { height: "186cm", chest: "93cm", waist: "74cm", hips: "91cm", shoes: "44" },
        "Editorial, Runway"
    ),
    generatedModel(
        "matt",
        "MATT",
        { height: "184cm", chest: "91cm", waist: "72cm", hips: "90cm", shoes: "43" },
        "Editorial, Casting"
    ),
    {
        id: "marika",
        name: "MARIKA",
        mainImage: "models photos/marika_thumb.png",
        thumbnail: "models photos/marika_thumb.png",
        images: ["models photos/marika_fullbody_1.png", "models photos/marika_side_1.png"],
        stats: { height: "174cm", bust: "82cm", waist: "62cm", hips: "90cm", shoes: "38" },
        skills: "Commercial, Catalog"
    },
    {
        id: "nadia",
        name: "NADIA",
        mainImage: "models photos/nadia_main.png",
        thumbnail: "models photos/nadia_thumb.png",
        images: ["models photos/nadia_fullbody_1.png", "models photos/nadia_side_1.png"],
        stats: { height: "179cm", bust: "82cm", waist: "61cm", hips: "89cm", shoes: "39" },
        skills: "Editorial, High Fashion"
    },
    generatedModel(
        "nils",
        "NILS",
        { height: "184cm", chest: "91cm", waist: "72cm", hips: "90cm", shoes: "43" },
        "Editorial, Casting"
    ),
    {
        id: "oliver",
        name: "OLIVER",
        mainImage: "models photos/oliver_thumb.png",
        thumbnail: "models photos/oliver_thumb.png",
        images: ["models photos/oliver_fullbody_1.png", "models photos/oliver_side_1.png"],
        stats: { height: "183cm", chest: "93cm", waist: "73cm", hips: "91cm", shoes: "43" },
        skills: "Editorial, Runway"
    },
    generatedModel(
        "pascal",
        "PASCAL",
        { height: "187cm", chest: "92cm", waist: "73cm", hips: "90cm", shoes: "44" },
        "Runway, Editorial"
    ),
    {
        id: "pawel",
        name: "PAWEL",
        mainImage: "models photos/pawel_thumb.png",
        thumbnail: "models photos/pawel_thumb.png",
        images: ["models photos/pawel_fullbody_1.png", "models photos/pawel_side_1.png"],
        stats: { height: "186cm", chest: "92cm", waist: "74cm", hips: "90cm", shoes: "44" },
        skills: "Avant-Garde, High Fashion"
    },
    generatedModel(
        "philip",
        "PHILIP",
        { height: "186cm", chest: "91cm", waist: "72cm", hips: "89cm", shoes: "44" },
        "Editorial, Casting"
    ),
    generatedModel(
        "sophie",
        "SOPHIE",
        { height: "175cm", bust: "80cm", waist: "60cm", hips: "88cm", shoes: "39" },
        "Editorial, Casting"
    ),
    generatedModel(
        "samuel",
        "SAMUEL",
        { height: "183cm", chest: "92cm", waist: "73cm", hips: "91cm", shoes: "43" },
        "Editorial, Commercial"
    ),
    {
        id: "sonja",
        name: "SONJA",
        mainImage: "models photos/sonja_thumb.png",
        thumbnail: "models photos/sonja_thumb.png",
        images: ["models photos/sonja_fullbody_1.png", "models photos/sonja_side_1.png"],
        stats: { height: "178cm", bust: "79cm", waist: "59cm", hips: "87cm", shoes: "39" },
        skills: "Editorial, High Fashion"
    },
    generatedModel(
        "suleyman",
        "SULEYMAN",
        { height: "189cm", chest: "94cm", waist: "75cm", hips: "91cm", shoes: "44" },
        "Runway, Editorial"
    ),
    {
        id: "tommy",
        name: "TOMMY",
        mainImage: "models photos/tommy_thumb.png",
        thumbnail: "models photos/tommy_thumb.png",
        images: ["models photos/tommy_fullbody_1.png", "models photos/tommy_side_1.png"],
        stats: { height: "180cm", chest: "90cm", waist: "70cm", hips: "88cm", shoes: "42" },
        skills: "Avant-Garde, Art"
    },
    generatedModel(
        "tzvetan",
        "TZVETAN",
        { height: "186cm", chest: "92cm", waist: "73cm", hips: "90cm", shoes: "44" },
        "Editorial, Runway"
    ),
    generatedModel(
        "vera",
        "VERA",
        { height: "177cm", bust: "79cm", waist: "59cm", hips: "87cm", shoes: "39" },
        "Editorial, Runway"
    ),
    {
        id: "wan",
        name: "WAN",
        mainImage: "models photos/4cb4b68d-bf1e-4d81-80a0-05ff0a51f26d 1.png",
        thumbnail: "models photos/wan_thumb.png",
        images: ["models photos/wan_fullbody_1.png", "models photos/wan_side_1.png"],
        stats: { height: "179cm", bust: "81cm", waist: "61cm", hips: "88cm", shoes: "40" },
        skills: "High Fashion, Art, Music"
    },
    generatedModel(
        "yakob",
        "YAKOB",
        { height: "185cm", chest: "93cm", waist: "74cm", hips: "91cm", shoes: "44" },
        "Editorial, Casting"
    ),
    generatedModel(
        "yonathan",
        "YONATHAN",
        { height: "185cm", chest: "94cm", waist: "75cm", hips: "92cm", shoes: "44" },
        "Editorial, Casting"
    ),
    generatedModel(
        "yurii",
        "YURII",
        { height: "186cm", chest: "92cm", waist: "73cm", hips: "91cm", shoes: "44" },
        "Runway, Editorial"
    ),
    {
        id: "zoe",
        name: "ZOE",
        mainImage: "models photos/newbreed 8 1.png",
        thumbnail: "models photos/zoe_thumb.png",
        images: ["models photos/zoe_fullbody_1.png", "models photos/zoe_side_1.png"],
        stats: { height: "180cm", bust: "80cm", waist: "60cm", hips: "88cm", shoes: "40" },
        skills: "Editorial, Runway, Performance"
    },

];

const gridContainer = document.getElementById('grid-container');
const profileContainer = document.getElementById('profile-container');
const profileContent = document.getElementById('profile-content');
const body = document.body;

function renderGrid() {
    gridContainer.innerHTML = '';

    // Create all cards (animation paused until triggered)
    models.forEach((model, index) => {
        const card = document.createElement('div');
        card.className = 'model-card';
        card.onclick = () => openProfile(model.id);

        // LQIP path (tiny 20x15 placeholder) - loads very fast
        const lqipPath = encodeURI(`models photos/lqip/${model.id}_lqip.png`);
        // Full thumbnail path
        const thumbPath = encodeURI(model.thumbnail);

        // Staggered animation delay: 60ms per card for smooth cascading
        card.style.animationDelay = `${index * 60}ms`;

        card.innerHTML = `
            <div class="model-name">${model.name}</div>
            <img src="${lqipPath}" 
                 data-src="${thumbPath}" 
                 alt="${model.name}" 
                 class="model-image">
        `;
        gridContainer.appendChild(card);
    });

    // Start swapping to thumbnails
    setTimeout(swapToThumbnails, 500);

    // Preload full-res images in background
    preloadFullResImages();
}

// Trigger cascade animation on all cards
function startCascadeAnimation() {
    document.querySelectorAll('.model-card').forEach(card => {
        card.classList.add('animate');
    });
}

function openProfile(id) {
    // Preload this model's full-res images immediately
    const model = models.find(m => m.id === id);
    if (model) {
        // Preload mainImage and all profile images
        [model.mainImage, ...model.images].forEach(src => {
            const img = new Image();
            img.src = encodeURI(src);
        });
    }
    window.location.hash = id;
}

function closeProfile() {
    if (window.location.hash) {
        window.location.hash = '';
        return;
    }

    showGridView();
}

function showProfileView(id) {
    const model = models.find(m => m.id === id);
    if (!model) {
        showGridView();
        return;
    }

    // Populate profile
    let statsHtml = '';
    for (const [key, value] of Object.entries(model.stats)) {
        statsHtml += `<div class="stat-row"><span class="stat-key">${key.toUpperCase()}</span> <span class="stat-value">${value}</span></div>`;
    }

    const imagesHtml = [model.mainImage, ...model.images].map(img =>
        `<img src="${encodeURI(img)}" class="profile-photo" alt="${model.name}">`
    ).join('');

    profileContent.innerHTML = `
        <div class="profile-sidebar">
            <h2 class="profile-name">${model.name}</h2>
            <div class="profile-stats">
                ${statsHtml}
                <div class="stat-row stat-row-skills"><span class="stat-key">SKILLS</span> <span class="stat-value">${model.skills}</span></div>
            </div>
            <div class="profile-actions">
                <button class="back-btn" onclick="copyLink()">SHARE LINK</button>
                <button class="back-btn desktop-back-btn" onclick="closeProfile()">BACK HOME</button>
            </div>
        </div>
        <div class="profile-gallery">
            ${imagesHtml}
            <button class="mobile-home-card" onclick="closeProfile()" aria-label="Back to homepage">
                <span class="mobile-home-card-brand">HUNGER MANAGEMENT</span>
                <span class="mobile-home-card-action">BACK TO HOMEPAGE</span>
            </button>
        </div>
    `;

    // Show profile, hide grid
    body.classList.add('view-profile');
    window.scrollTo(0, 0);
}

function copyLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('LINK COPIED');
    });
}

function showGridView() {
    body.classList.remove('view-profile');
    profileContent.innerHTML = '';
    // Ensure grid is rendered (idempotent)
    if (gridContainer.children.length === 0) {
        renderGrid();
    }
}

function handleRoute() {
    const hash = window.location.hash.slice(1); // Remove '#'
    if (hash) {
        showProfileView(hash);
    } else {
        showGridView();
    }
}

// Swap LQIP images to full thumbnails
function swapToThumbnails() {
    const images = document.querySelectorAll('.model-image[data-src]');
    images.forEach(img => {
        const thumbSrc = img.dataset.src;
        // Create a new image to preload the thumbnail
        const preloader = new Image();
        preloader.onload = () => {
            img.src = thumbSrc;
            img.classList.add('loaded');
        };
        preloader.src = thumbSrc;
    });
}

// Preload full-resolution images in background for instant profile loading
function preloadFullResImages() {
    // Wait a bit for thumbnails to finish loading first
    setTimeout(() => {
        const allImages = [];

        // Collect all full-res images (mainImage + images array)
        models.forEach(model => {
            allImages.push(model.mainImage);
            model.images.forEach(img => allImages.push(img));
        });

        // Preload each image in background with low priority
        allImages.forEach((src, index) => {
            // Stagger the loading to avoid overwhelming the browser
            setTimeout(() => {
                const img = new Image();
                img.src = encodeURI(src);
            }, index * 50); // 50ms between each image
        });

        console.log(`Preloading ${allImages.length} full-res images in background...`);
    }, 1000); // Start 1 second after grid renders
}

// Event Listeners
window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', () => {
    // Reset scroll position
    window.scrollTo(0, 0);

    // Render grid immediately so images start downloading
    renderGrid();

    // Start cascade animation immediately
    startCascadeAnimation();

    // Handle any existing hash
    handleRoute();
});

// Reset scroll on every navigation
window.addEventListener('hashchange', () => {
    window.scrollTo(0, 0);
});
