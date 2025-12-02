// Initialisation des icônes Lucide
lucide.createIcons();

function switchTab(tabId) {
    // 1. Cacher toutes les sections
    const sections = ['home', 'about', 'projects', 'contact'];
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });

    // 2. Afficher la section demandée
    const activeSection = document.getElementById(tabId);
    if(activeSection) {
        activeSection.classList.remove('hidden');
        // Relancer l'animation pour l'effet visuel
        activeSection.classList.remove('animate-section');
        void activeSection.offsetWidth; // Force le navigateur à recalculer (pour relancer l'animation)
        activeSection.classList.add('animate-section');
    }

    // 3. Mettre à jour les boutons du menu (état actif)
    // On enlève la classe 'active' de tous les boutons
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // On l'ajoute au bouton correspondant (si ce n'est pas l'accueil)
    if (tabId !== 'home') {
        const activeBtn = document.getElementById('btn-' + tabId);
        if(activeBtn) activeBtn.classList.add('active');
    }
    
    // Scroll en haut de page
    window.scrollTo(0, 0);
}

// Initialisation des icônes Lucide au chargement de la page
document.addEventListener("DOMContentLoaded", function() {
    lucide.createIcons();
});