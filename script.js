const randomElement = getRandomElement(versets);
const texteAffiche = `${randomElement.auteur} - ${randomElement.ligne}\n${randomElement.parole}`;

document.getElementById("parole").innerText = texteAffiche;

// Sélectionne l'élément bouton
const bouton = document.getElementById("changerVerset");

// Ajoute un écouteur d'événements au clic sur le bouton
bouton.addEventListener("click", function() {
    const randomElement = getRandomElement(versets);
    const texteAffiche = `${randomElement.auteur} - ${randomElement.ligne}\n${randomElement.parole}`;
    document.getElementById("parole").innerText = texteAffiche;
});