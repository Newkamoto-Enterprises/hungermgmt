const models = [
    {
        id: "alina",
        name: "ALINA",
        mainImage: "models photos/16a2b21b-ddc6-4086-9b40-11913c41fdf3 1.png",
        thumbnail: "models photos/alina_thumb.png",
        images: ["models photos/alina_fullbody_4.png", "models photos/alina_side_3.png"],
        stats: { height: "178cm", bust: "80cm", waist: "60cm", hips: "88cm", shoes: "39" },
        skills: "Runway, Editorial, Dance"
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
    {
        id: "wan",
        name: "WAN",
        mainImage: "models photos/4cb4b68d-bf1e-4d81-80a0-05ff0a51f26d 1.png",
        thumbnail: "models photos/wan_thumb.png",
        images: ["models photos/wan_fullbody_1.png", "models photos/wan_side_1.png"],
        stats: { height: "179cm", bust: "81cm", waist: "61cm", hips: "88cm", shoes: "40" },
        skills: "High Fashion, Art, Music"
    },
    {
        id: "harper",
        name: "HARPER",
        mainImage: "models photos/6bdeefaf-7de6-4047-ae68-f4c5ad766373 1.png",
        thumbnail: "models photos/harper_thumb.png",
        images: ["models photos/harper_fullbody_2.png", "models photos/harper_side_1.png"],
        stats: { height: "176cm", bust: "82cm", waist: "63cm", hips: "89cm", shoes: "38" },
        skills: "Editorial, Catalog, Swim"
    },
    {
        id: "jacob",
        name: "JACOB",
        mainImage: "models photos/89435bcb-3d58-4757-a29a-3c706cfd2a00 2.png",
        thumbnail: "models photos/jacob_thumb.png",
        images: ["models photos/jacob_fullbody_1.png", "models photos/jacob_side_1.png"],
        stats: { height: "188cm", chest: "98cm", waist: "78cm", hips: "96cm", shoes: "45" },
        skills: "Runway, Streetwear, Skate"
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
        id: "arthur",
        name: "ARTHUR",
        mainImage: "models photos/d9ecf849-a84d-46d4-bc47-622d793b87cc 1.png",
        thumbnail: "models photos/arthur_thumb.png",
        images: ["models photos/arthur_fullbody_1.png", "models photos/arthur_side_1.png"],
        stats: { height: "184cm", chest: "93cm", waist: "73cm", hips: "91cm", shoes: "42" },
        skills: "Runway, Print, Acting"
    },
    {
        id: "esmeralda",
        name: "ESMERALDA",
        mainImage: "models photos/newbreed 5 1.png",
        thumbnail: "models photos/esmeralda_thumb.png",
        images: ["models photos/esmeralda_fullbody_1.png", "models photos/esmeralda_side_1.png"],
        stats: { height: "177cm", bust: "79cm", waist: "59cm", hips: "87cm", shoes: "39" },
        skills: "High Fashion, Dance, Video"
    },
    {
        id: "zoe",
        name: "ZOE",
        mainImage: "models photos/newbreed 8 1.png",
        thumbnail: "models photos/zoe_thumb.png",
        images: ["models photos/zoe_fullbody_1.png", "models photos/zoe_side_1.png"],
        stats: { height: "180cm", bust: "80cm", waist: "60cm", hips: "88cm", shoes: "40" },
        skills: "Editorial, Runway, Performance"
    }
];

const gridContainer = document.getElementById('grid-container');
const profileContainer = document.getElementById('profile-container');
const profileContent = document.getElementById('profile-content');
const body = document.body;

function renderGrid() {
    gridContainer.innerHTML = '';
    models.forEach(model => {
        const card = document.createElement('div');
        card.className = 'model-card';
        card.onclick = () => openProfile(model.id);

        // Encode URI component for paths with spaces
        const imagePath = encodeURI(model.thumbnail);

        card.innerHTML = `
            <div class="model-name">${model.name}</div>
            <img src="${imagePath}" alt="${model.name}" class="model-image" loading="lazy">
        `;
        gridContainer.appendChild(card);
    });
}

function openProfile(id) {
    const model = models.find(m => m.id === id);
    if (!model) return;

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
                <div class="stat-row" style="margin-top: 20px;"><span class="stat-key">SKILLS</span> <span class="stat-value">${model.skills}</span></div>
            </div>
            <button class="back-btn" onclick="closeProfile()">← BACK</button>
        </div>
        <div class="profile-gallery">
            ${imagesHtml}
        </div>
    `;

    // Show profile, hide grid
    body.classList.add('view-profile');
    window.scrollTo(0, 0);
}

function closeProfile() {
    body.classList.remove('view-profile');
    profileContent.innerHTML = '';
}

// Initial Render
renderGrid();
