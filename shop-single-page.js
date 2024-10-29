// Her henter jeg produktdata fra localStorage. Det er det produkt, som brugeren valgte på kategorisiden, og jeg gemmer det i 'productData'.
const productData = JSON.parse(localStorage.getItem('selectedProduct'));

// Jeg finder de HTML-elementer, som jeg skal opdatere med produktets data: billedet, produktnavnet og prisen.
const imagePreview = document.getElementById('shop-single-page-wrapper-left-image-preview-image');
const productName = document.querySelector('#shop-single-page-wrapper-right h1');
const productPrice = document.querySelector('#shop-single-page-wrapper-right-price h3');

// Her opdaterer jeg HTML-elementerne med data fra productData, så brugeren kan se det rigtige produktbillede, navn og pris.
if (productData) {
    // Jeg sætter billedets src til produktets foto og tilføjer en alt-tekst med produktets navn for tilgængelighed.
    imagePreview.src = productData.photo;
    imagePreview.alt = productData.name;
    
    // Her opdaterer jeg produktnavnet i <h1> med det valgte produkts navn.
    productName.textContent = productData.name;
    
    // Prisen bliver også opdateret, og jeg sørger for at tilføje 'DKK', så brugeren kan se valutaen.
    productPrice.textContent = `${productData.price} DKK`;
}

// Her finder jeg Add to Cart-knappen og tilføjer en event listener, så når brugeren klikker på den, gemmes produktet i kurven.
const addToCartButton = document.getElementById('shop-single-page-wrapper-right-add-to-cart-quantity-paypal-add-to-cart');
addToCartButton.addEventListener('click', () => {
    // Jeg opretter et objekt, der indeholder produktets navn, pris og billede, og gemmer det i localStorage under navnet 'cartProduct'.
    const selectedProduct = {
        name: productData.name,
        price: productData.price,
        photo: productData.photo
    };
    
    // Her gemmer jeg produktet i localStorage, så det kan hentes på kurvsiden.
    localStorage.setItem('cartProduct', JSON.stringify(selectedProduct));
    
    // Når produktet er tilføjet til kurven, sender jeg brugeren videre til kurvsiden (hifi-cart.html).
    window.location.href = 'hifi-cart.html';
});





