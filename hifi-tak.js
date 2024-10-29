        // Hent produktnavnet fra localStorage
        const purchasedProductName = localStorage.getItem('purchasedProductName');

        // Hvis der findes et gemt produktnavn, vis det
        if (purchasedProductName) {
            document.getElementById('purchased-product').textContent = purchasedProductName;
        } else {
            document.getElementById('purchased-product').textContent = 'Ingen produkt fundet';
        }
