// Chaque bouton écoute un clic (addEventListener) et ouvre une boîte SweetAlert2 (Swal.fire)

// Alerte 1 : confirmation d'envoi de message (icône verte "success")
document.getElementById('sent').addEventListener('click', () => {
    Swal.fire({
        title: 'Message envoyé !',
        text: 'Merci de m\'avoir contacté. Je reviendrai vers toi très vite.',
        icon: 'success', // icône verte avec une coche
    });
});

// Alerte 2 : erreur de formulaire invalide (icône rouge "error")
document.getElementById('invalid').addEventListener('click', () => {
    Swal.fire({
        title: 'Formulaire invalide',
        text: 'Certains champs sont mal remplis. Vérifie ton adresse email.',
        icon: 'error',                  // icône rouge avec une croix
        confirmButtonColor: '#e11d48',  // bouton de confirmation en rouge
    });
});

// Alerte 3 : demande de confirmation avant suppression (icône orange "warning")
// Cette alerte a deux boutons : confirmer ou annuler
document.getElementById('deleted').addEventListener('click', () => {
    Swal.fire({
        title: 'Supprimer le projet ?',
        text: 'Cette action est irréversible.',
        icon: 'warning',                    // icône orange avec un point d'exclamation
        showCancelButton: true,             // affiche un bouton "Annuler" en plus
        confirmButtonText: 'Oui, supprimer',
        confirmButtonColor: '#e11d48',      // bouton de confirmation en rouge
        cancelButtonText: 'Annuler',
    }).then((result) => {
        // .then() est exécuté après que l'utilisateur a cliqué sur un bouton
        // result.isConfirmed vaut true uniquement si l'utilisateur a cliqué sur "Oui, supprimer"
        if (result.isConfirmed) {
            // On retire la classe "hidden" pour rendre visible le message de confirmation
            document.getElementById('delete-message').classList.remove('hidden');
        }
    });
});
