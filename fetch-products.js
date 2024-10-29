// Her henter jeg query parameteren category fra URLen. Jeg bruger den til at bestemme, hvilken kategori af produkter der skal vises.
const params = new URLSearchParams(window.location.search);
let category = params.get('category');

// Her opdaterer jeg kategori-navnet i HTMLen, så brugeren ved, hvilken kategori de kigger på.
document.getElementById('category-name').textContent = category;

// URL til JSON data på GitHub
const dataUrl = "https://raw.githubusercontent.com/Davidski7/Hi-fi.corner/refs/heads/main/db.json";


// Jeg opretter en tom liste, som skal gemme produkterne fra den valgte kategori.
let categoryProducts = [];

// Her har jeg lavet en asynkron funktion, der skal hente data fra JSON-serveren. Jeg bruger try-catch for at håndtere fejl, hvis der skulle opstå problemer under hentningen
async function fetchData() {
    try {
        // Jeg laver et fetch-kald til den dynamiske URL for at hente produkter.
        const response = await fetch(url(category));
        // Jeg konverterer dataen til JSON-format.
        const data = await response.json();
        // Her tjekker jeg, om dataen er et array. Hvis ikke, trækker jeg produkterne ud fra kategorien.
        categoryProducts = Array.isArray(data) ? data : data[category];
        // Jeg kalder min funktion, som viser produkterne i HTMLen.
        displayProducts(categoryProducts);
    } catch (error) {
        // Hvis der opstår en fejl, logger jeg den her.
        console.error('Fejl ved hentning af data:', error);
    }
}

// Denne funktion tager imod produkterne og opretter dynamisk HTML, der viser dem på siden. 
function displayProducts(products) {
    // Jeg henter containeren i HTMLen, hvor produkterne skal vises.
    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    // Jeg looper igennem hvert produkt og opretter de nødvendige HTML-elementer for at vise dem.
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <img src="${product.photo}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Pris: ${product.price} DKK</p>
            <p>Producent: ${product.manufacturer}</p>
            <button class="view-details" data-product='${JSON.stringify(product)}'>Se detaljer</button>
        `;
        // Her tilføjer jeg produktet til containeren.
        productContainer.appendChild(productElement);
    });

    // Jeg tilføjer event listeners til "Se detaljer"-knapperne, så brugeren kan gå videre til den specifikke produktside.
    addDetailButtonListeners();
}

// Denne funktion tilføjer event listeners til detalje-knapperne, så jeg kan gemme det valgte produkt i localStorage og sende brugeren videre til en anden side.
function addDetailButtonListeners() {
    // Jeg vælger alle knapper, der har klassen view-details Disse knapper er til at vise produktdetaljer.
    const viewDetailButtons = document.querySelectorAll('.view-details');
    
    // Jeg tilføjer en click event listener til hver knap.
    viewDetailButtons.forEach(button => {
        // Når brugeren klikker på knappen, køres denne funktion.
        button.addEventListener('click', () => {
            // Hent produktdata fra knappen. Den ligger i en data-product attribut i JSON-format, så jeg parser den til et JavaScript-objekt.
            const productData = JSON.parse(button.getAttribute('data-product'));

            // Her gemmer jeg det valgte produkt i localStorage under nøglen selectedProduct, så jeg kan bruge det på produktsiden.
            localStorage.setItem('selectedProduct', JSON.stringify(productData));

            // Jeg sender brugeren den så videre til den ny side, hvor produktdetaljerne vises.
            window.location.href = 'shop-single-page.html';
        });
    });
}

// Her laver jeg en filtreringsfunktion, som filtrerer produkterne baseret på pris. Jeg sammenligner prisen på hvert produkt med det maksimale beløb, som brugeren har angivet.
function filterProductsByPrice() {
    // Jeg henter brugerens indtastede maksimale pris fra input-feltet med id max-price og konverterer den til et decimaltal.
    const maxPrice = parseFloat(document.getElementById('max-price').value);

    // Jeg sikrer mig, at maxPrice er et gyldigt tal. Hvis det ikke er NaN (Not a Number), fortsætter jeg.
    if (!isNaN(maxPrice)) {
        // Jeg filtrerer produkterne i categoryProducts-listen, så kun produkter med en pris mindre end eller lig med maxPrice vises.
        const filteredProducts = categoryProducts.filter(product => parseFloat(product.price) <= maxPrice);

        // Jeg viser de filtrerede produkter ved at kalde en funktion, der opdaterer produktvisningen.
        displayProducts(filteredProducts);
    }
}

// Jeg tilføjer event listeners til kategori-links, så brugeren kan klikke på en ny kategori og få vist produkterne for den kategori.
const categoryLinks = document.querySelectorAll('.category-link');

// Jeg løber igennem hver kategori-link og tilføjer en event listener, der kører, når et link bliver klikket.
categoryLinks.forEach(link => {
    link.addEventListener('click', (event) => {
       

        // Jeg henter den valgte kategori fra linkets data-category attribut.
        category = link.getAttribute('data-category');

        // Jeg opdaterer et element på siden med id category-name for at vise den valgte kategori.
        document.getElementById('category-name').textContent = category;

        // Jeg kalder en funktion fetchData() for at hente og vise produkterne i den valgte kategori.
        fetchData();
    });
});


// Jeg tilføjer en event listener til filtreringsknappen, så filtreringen aktiveres, når brugeren klikker.
document.getElementById('filter-price').addEventListener('click', filterProductsByPrice);

// Til sidst sørger jeg for at hente data, når siden indlæses.
fetchData();
