// Fonction pour générer le footer sur toutes les pages
function generateFooter() {
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        const year = new Date().getFullYear();
        footerElement.innerHTML = `
            <p>&copy; ${year} Mon Portfolio - Colin Guyon Vallin</p>
            <p style="font-size: 0.8em; margin-top: 5px; opacity: 0.8;">
                BTS SIO - Parcours SISR | Licence Informatique
            </p>
        `;
    }
}

// On lance la fonction dès que la page est chargée
document.addEventListener('DOMContentLoaded', generateFooter);