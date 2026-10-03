// Point d'entrée principal du projet : importe le CSS global et tous les modules JS

// Import de la feuille de style principale (Tailwind + styles personnalisés)
import '../css/style.css'

// Import de chaque fichier JS par fonctionnalité (grâce à type="module" dans le HTML)
import './swiper.js'        // Carrousel d'images
import './scrollreveal.js'  // Animations au scroll
import './typed.js'         // Effet de frappe automatique
import './chart.js'         // Graphiques de compétences
import './sweetalert.js'    // Boîtes d'alertes stylisées
