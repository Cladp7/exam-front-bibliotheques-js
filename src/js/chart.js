// ====== GRAPHIQUE 1 : Barres verticales - Compétences techniques ======

// Récupère le canvas HTML dans lequel Chart.js va dessiner le graphique
const ctx1 = document.getElementById('barChart');

new Chart(ctx1, {
    // Type "bar" = graphique en barres verticales
    type: 'bar',
    data: {
        // Étiquettes de l'axe X (les noms des technologies)
        labels: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Laravel', 'MySQL'],
        datasets: [{
            label: 'Compétences techniques',
            // Valeurs de chaque barre (sur 100)
            data: [90, 80, 65, 55, 45, 60],
            // Coins arrondis en haut de chaque barre
            borderRadius: { topLeft: 6, topRight: 6 },
            // Même couleur de base (violet indigo) avec une opacité décroissante pour varier visuellement
            backgroundColor: [
                'rgba(99, 102, 241, 1)',    // HTML - 100%
                'rgba(99, 102, 241, 0.85)', // CSS - 90%
                'rgba(99, 102, 241, 0.7)',  // JavaScript - 80%
                'rgba(99, 102, 241, 0.55)', // PHP - 70%
                'rgba(99, 102, 241, 0.4)',  // Laravel - 60%
                'rgba(99, 102, 241, 0.25)', // MySQL - 50%
            ],
        }]
    },
    options: {
        plugins: {
            // Légende masquée : les étiquettes de l'axe X suffisent
            legend: {
                display: false
            }
        },
        // Le graphique s'adapte à la largeur de son conteneur
        responsive: true,
        // On désactive le ratio automatique pour contrôler la hauteur via CSS
        maintainAspectRatio: false,
        layout: {
            // Espace en bas pour que les étiquettes de l'axe X ne soient pas coupées
            padding: { bottom: 36 }
        },
        scales: {
            // Axe X : couleur des étiquettes et couleur des lignes de grille
            x: { ticks: { color: '#9f9fa9' }, grid: { color: '#414A58' } },
            // Axe Y : de 0 à 100, graduations de 10 en 10
            y: { min: 0, max: 100, ticks: { stepSize: 10, color: '#9f9fa9' }, grid: { color: '#414A58' } }
        }
    }
});


// ====== GRAPHIQUE 2 : Donut - Répartition du temps projet ======

// Récupère le second canvas pour le graphique en anneau
const ctx2 = document.getElementById('donutChart');

new Chart(ctx2, {
    // Type "doughnut" = graphique en anneau (donut), variante du camembert avec un trou au centre
    type: 'doughnut',
    data: {
        // Étiquettes affichées dans la légende
        labels: ['Design', 'Intégration', 'Scripts', 'Backend', 'Tests'],
        datasets: [{
            // Pourcentage de temps passé sur chaque phase (total = 100)
            data: [20, 35, 25, 15, 5],
            // Épaisseur et couleur de la bordure entre les segments
            borderWidth: 3,
            borderColor: '#364153',
            // Une couleur distincte par phase pour faciliter la lecture
            backgroundColor: [
                '#F2930D', // orange  - Design
                '#6366f1', // violet  - Intégration
                '#10b981', // vert    - Scripts
                '#ef4444', // rouge   - Backend
                '#a855f7', // mauve   - Tests
            ],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                // Légende positionnée sous le graphique
                position: 'bottom',
                labels: {
                    // Couleur du texte de la légende assortie au thème sombre
                    color: '#9f9fa9',
                }
            }
        }
    }
});
