document.addEventListener("DOMContentLoaded", function () {
    // Images fixes pour les compétences (logos officiels ou libres de droits)
    const skillsImages = {
        "Python": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        "HTML & CSS": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        "JavaScript": "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        "Gestion de serveurs": "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
    };

    // Ajout des images pour les compétences
    document.querySelectorAll(".skill-card").forEach((card) => {
        let skillName = card.querySelector("h3").innerText;
        if (skillsImages[skillName]) {
            let img = document.createElement("img");
            img.src = skillsImages[skillName];
            img.alt = skillName;
            img.classList.add("skill-image");
            card.prepend(img);
        }
    });

    // Images des projets (liens directs vers des images libres de droits)
    const projectsImages = {
        "Robot Suiveur de Ligne": "https://tse4.mm.bing.net/th?id=OIP.nRroihc0N6a5p5U26wFfKQHaEK&pid=Api",
        "Portfolio Personnel": "https://tse3.mm.bing.net/th?id=OIP.UKQTqcuclH5azTtQUoI_-QHaE8&pid=Api"
    };

    // Ajout des images dans les projets
    document.querySelectorAll(".project-card").forEach((card) => {
        let projectTitle = card.querySelector("h3")?.innerText;  // Récupérer le titre du projet
        if (projectsImages[projectTitle]) {
            // On crée une balise img si elle n'existe pas déjà
            let imgContainer = card.querySelector(".project-image img");
            if (!imgContainer) {
                imgContainer = document.createElement("img");
                imgContainer.classList.add("project-image-img");
                card.querySelector(".project-image").appendChild(imgContainer);
            }
            imgContainer.src = projectsImages[projectTitle];
            imgContainer.alt = projectTitle;
        }
    });

    // Effet typing automatique sur le titre
    const typingEffect = document.querySelector(".typing-effect");
    const text = "Sabri KELLOUA | Cybersécurité & Réseaux";
    let index = 0;

    function type() {
        if (index < text.length) {
            typingEffect.textContent += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }

    typingEffect.textContent = "";
    type();

    // Animation du menu mobile
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
