const products = [
    {
        id: 1,
        name: "Rainbow Gummy Bears",
        price: 350,
        description: "Classic gummy bears in every color. Super chewy and fruity.",
        ingredients: ["Sugar", "Glucose Syrup", "Fruit Juice", "Gelatin", "Citric Acid"],
        image: "images/rainbow_gummy_bears.png"
    },
    {
        id: 2,
        name: "Sour Neon Worms",
        price: 300,
        description: "Bright, sour, and addictive. If you like tangy candy, these are for you.",
        ingredients: ["Sugar", "Corn Syrup", "Citric Acid", "Lactic Acid", "Natural Flavors"],
        image: "images/sour_neon_worms.png"
    },
    {
        id: 3,
        name: "Galaxy Lollipops",
        price: 250,
        description: "Beautiful space-themed lollipops. They look amazing and taste great.",
        ingredients: ["Isomalt", "Sugar", "Edible Glitter", "Flavoring", "Food Coloring"],
        image: "images/galaxy_lollipops.png"
    }
];

function getQueryParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}

function initIndex() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = products.map(product => `
        <div class="product-card" onclick="window.location.href='detail.html?id=${product.id}'">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <span class="price">${product.price} DZD</span>
                <button class="btn">View Ingredients</button>
            </div>
        </div>
    `).join('');
}

function initDetail() {
    const detailContainer = document.getElementById('detail-content');
    if (!detailContainer) return;

    const id = getQueryParam('id');
    const product = products.find(p => p.id == id);

    if (!product) {
        detailContainer.innerHTML = '<h2>Candy not found! 🍬</h2><a href="index.html" class="btn">Go Back</a>';
        return;
    }

    document.title = `${product.name} - kl7sr`;
    document.getElementById('detail-image').src = product.image;
    document.getElementById('detail-title').textContent = product.name;
    document.getElementById('detail-price').textContent = `${product.price} DZD`;
    document.getElementById('detail-desc').textContent = product.description;

    document.getElementById('ingredients-list').innerHTML = product.ingredients.map(ing => `
        <span class="tag">${ing}</span>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('product-grid')) initIndex();
    else if (document.getElementById('detail-content')) initDetail();
});
