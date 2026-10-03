// Initialisation de Typed.js sur l'élément #element (le span jaune dans le h3)
// Typed.js écrit et efface automatiquement des chaînes de texte en boucle
var typed = new Typed('#element', {

    // Liste des textes qui s'afficheront les uns après les autres
    strings: ['passionné·e de CSS.', 'curieux·euse et créatif·ve.', 'prêt·e pour mon stage.'],

    // Vitesse d'écriture : 75 ms entre chaque caractère tapé
    typeSpeed: 75,

    // Vitesse d'effacement : 25 ms entre chaque caractère supprimé (plus rapide que l'écriture)
    backSpeed: 25,

    // Délai avant de commencer à taper le premier texte (en ms)
    startDelay: 500,

    // Délai de pause après avoir fini d'écrire un texte, avant de l'effacer
    backDelay: 300,

    // Recommence depuis le début après le dernier texte (boucle infinie)
    loop: true,
});
