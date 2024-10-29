// URL til JSON data på GitHub
const dataUrl = "https://raw.githubusercontent.com/Davidski7/Hi-fi.corner/refs/heads/main/db.json";

// Her henter jeg query parameteren category fra URLen. Jeg bruger den til at bestemme, hvilken kategori af produkter der skal vises.
const params = new URLSearchParams(window.location.search);
let category = params.get('category');

// Her opdaterer jeg kategori-navnet i HTMLen, så brugeren ved, hvilken kategori de kigger på.
document.getElementById('category-name').textContent = category;

// Tom liste til produkter fra den valgte kategori.
let categoryProducts = [];

// Asynkron funktion til at hente data fra GitHub JSON-fil
async function fetchData() {
    try {
        // Hent data fra GitHub JSON-fil
        const response = await fetch(dataUrl);
        const data = await response.json();

        // Hent produkter for den valgte kategori fra JSON-dataen
        categoryProducts = data[category] || [];

        // Vis produkterne i HTMLen
        displayProducts(categoryProducts);
    } catch (error) {
        console.error('Fejl ved hentning af data:', error);
    }
}

// Funktion til at vise produkter
function displayProducts(products) {
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <img src="${product.photo}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Pris: ${product.price} DKK</p>
            <p>Producent: ${product.manufacturer}</p>
            <button class="view-details" data-product='${JSON.stringify(product)}'>Se detaljer</button>
        `;
        productContainer.appendChild(productElement);
    });

    addDetailButtonListeners();
}

// Tilføjer event listeners til knapperne
function addDetailButtonListeners() {
    const viewDetailButtons = document.querySelectorAll('.view-details');

    viewDetailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productData = JSON.parse(button.getAttribute('data-product'));
            localStorage.setItem('selectedProduct', JSON.stringify(productData));
            window.location.href = 'shop-single-page.html';
        });
    });
}

// Filtreringsfunktion baseret på pris
function filterProductsByPrice() {
    const maxPrice = parseFloat(document.getElementById('max-price').value);
    if (!isNaN(maxPrice)) {
        const filteredProducts = categoryProducts.filter(product => parseFloat(product.price) <= maxPrice);
        displayProducts(filteredProducts);
    }
}

// Tilføj event listeners til kategori-links
const categoryLinks = document.querySelectorAll('.category-link');
categoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        category = link.getAttribute('data-category');
        document.getElementById('category-name').textContent = category;
        fetchData();
    });
});

// Tilføj event listener til filtreringsknap
document.getElementById('filter-price').addEventListener('click', filterProductsByPrice);

// Hent data ved indlæsning af siden
fetchData();

