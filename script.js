const miniBulles = document.querySelectorAll('.mini-bulle');
const grandBulle = document.querySelector('.grande-bulle');

const articles = [       
                mot = `<p>Je te dis merci !! d'avoir accepté mon invitation</p>`,
                mot = `<p><br /><span class="linke">LinkedIn</span></p>`,
                mot = `<p><span class="bye">À bientôt 😉</span></p>`,
                mot = `<p class="github">Code disponible sur <span class="code">GitHub</span></p>`
                 ];


miniBulles.forEach((bulles) => {
    bulles.addEventListener('click', function(e){
    e.stopPropagation();
     switch (bulles) {
        case miniBulles[0]:
           grandBulle.innerHTML = articles[0];
            break;
        case miniBulles[1]:
            grandBulle.innerHTML = articles[1];
            break;
        case miniBulles[2]:
            grandBulle.innerHTML = articles[2];
            break;
        case miniBulles[3]:
            grandBulle.innerHTML = articles[3];
            break;
        default:
            break;
        }
    });
});