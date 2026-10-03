// Initialisation du carrousel Swiper sur l'élément qui porte la classe ".swiper"
const swiper = new Swiper('.swiper', {

    // Défilement horizontal (les slides se suivent de gauche à droite)
    direction: 'horizontal',

    // Boucle infinie : après le dernier slide, on revient automatiquement au premier
    loop: true,

    // Pagination : active les points de navigation en bas du slider
    pagination: {
        el: '.swiper-pagination', // cible le div qui contiendra les points
    },

    // Boutons de navigation précédent / suivant (flèches latérales)
    navigation: {
        nextEl: '.swiper-button-next', // flèche droite
        prevEl: '.swiper-button-prev', // flèche gauche
    },
});
