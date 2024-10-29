// Funktion til at vise produktdata fra localStorage
function displayProductData() {
    // Hent det gemte produkt fra localStorage
    const cartProduct = JSON.parse(localStorage.getItem('cartProduct'));

    // Hvis der er et produkt i kurven, vis det
    if (cartProduct) {
        // Find elementerne hvor produktdataene skal vises
        const cartProductName = document.querySelector('.cart-product-name');
        const cartProductPrice = document.querySelector('.cart-product-price');
        const cartProductImage = document.querySelector('.cart-product-image');

        // Opdater elementerne med produktdataene
        cartProductName.textContent = cartProduct.name;
        cartProductPrice.textContent = `${cartProduct.price} DKK`;
        cartProductImage.src = cartProduct.photo;
        cartProductImage.alt = cartProduct.name;
    }
}

// Kald displayProductData, når siden indlæses
window.onload = displayProductData;

// Valideringskoden, der kører ved submit
document.querySelector("#form1").addEventListener("submit", validate);
const messageField = document.querySelector("#besked");

function validate(evt) {
    let error;

    // Hent felter
    const address = document.getElementById("address");
    const town = document.getElementById("town");
    const phone = document.getElementById("phone");
    const email1 = document.getElementById("email1");
    const card = document.getElementById("card");
    const date = document.getElementById("date");
    const cvv = document.getElementById("cvv");
    const name = document.getElementById("name");

    // Validering af adressefeltet
    if (address.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst din adresse!";
        messageField.textContent = error;
        address.focus();
        return false;
    }

    // Validering af byfeltet
    if (town.value == "") {
        evt.preventDefault();
        error = "Skriv venligst din By!";
        messageField.textContent = error;
        town.focus();
        return false;
    }

    // Validering af telefonfeltet
    if (phone.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst dit postnummer!";
        messageField.textContent = error;
        phone.focus();
        return false;
    }

    // Tjekker om telefonnummeret kun indeholder tal
    if (isNaN(phone.value)) {
        evt.preventDefault();
        error = "Dit telefonnummer skal være med tal!";
        messageField.textContent = error;
        phone.focus();
        return false;
    }

    // Validering af e-mail feltet
    if (email1.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst din e-mail adresse!";
        messageField.textContent = error;
        email1.focus();
        return false;
    }

    // Tjekker om e-mailen er gyldig
    const atpos = email1.value.indexOf("@");
    const dotpos = email1.value.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email1.value.length) {
        evt.preventDefault();
        error = "Din e-mail adresse skal være gyldig (fx navn@mail.dk)!";
        messageField.textContent = error;
        email1.focus();
        return false;
    }

    // Validering af kortnummerfeltet
    if (card.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst dit kortnummer!";
        messageField.textContent = error;
        card.focus();
        return false;
    }

    // Tjekker om kortnummeret har mindst 16 cifre
    if (card.value.length < 16) {
        evt.preventDefault();
        error = "Dit kortnummer skal være mindst 16 cifre!";
        messageField.textContent = error;
        card.focus();
        return false;
    }

    // Validering af udløbsdato
    if (date.value == "") {
        evt.preventDefault();
        error = "Skriv venligst din udløbsdato på dit kort!";
        messageField.textContent = error;
        date.focus();
        return false;
    }

    // Validering af CVV
    if (cvv.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst dit CVV nummer!";
        messageField.textContent = error;
        cvv.focus();
        return false;
    }

    // Tjekker om CVV har mindst 3 cifre
    if (cvv.value.length < 3) {
        evt.preventDefault();
        error = "Dit CVV skal være mindst 3 cifre!";
        messageField.textContent = error;
        cvv.focus();
        return false;
    }

    // Validering af navnefeltet
    if (name.value == "") {
        evt.preventDefault();
        error = "Udfyld venligst dit navn!";
        messageField.textContent = error;
        name.focus();
        return false;
    }
}

// Tilføj denne funktion til at gemme produktnavnet ved formularens afsendelse
document.querySelector("#form1").addEventListener("submit", function(evt) {
    // Hent produktdata fra localStorage
    const cartProduct = JSON.parse(localStorage.getItem('cartProduct'));

    if (cartProduct) {
        // Gem produktnavnet i localStorage til "tak"-siden
        localStorage.setItem('purchasedProductName', cartProduct.name);
    }
});
