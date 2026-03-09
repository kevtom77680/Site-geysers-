document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.transition-link');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // bloque le comportement normal du lien
            const url = this.href; // récupère le lien

            document.body.classList.add('fade-out'); // ajoute la classe CSS d’animation

            setTimeout(() => {
                window.location.href = url; // redirige vers la page
            }, 800); // délai (doit correspondre à la durée de l'animation CSS)
        });
    });
});

const questions = document.querySelectorAll(".question");

questions.forEach((btn) => {
    btn.addEventListener("click", () => {
        const answer = btn.nextElementSibling;
        answer.classList.toggle("open");
    });
});

let currentLang='fr';

document.getElementById('toggleLang').addEventListener('click', () => {
    currentLang = currentLang === 'fr' ? 'en' : 'fr' ;

    document.querySelectorAll('[data-fr]').forEach(el => {
        const newText = el.getAttribute(`data-${currentLang}`);
        if (newText !== null){
            el.textContent = newText;
        }
    });

    document.getElementById('flag').src = currentLang === 'fr' ? 'drap_en.png' : 'drap_fr.png';
});