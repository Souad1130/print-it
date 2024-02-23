const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//les variables
const dots = document.querySelector(".dots") 
let index = 0


// Fonction pour afficher les dots

function displayDots() {
    const dotsContainer = document.querySelector(".dots");

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        dotsContainer.appendChild(dot);
    }
// Mettre à jour les dots pour refléter la première slide actuelle
    updateDots();
}


// Fonction pour mettre à jour l'apparence des dots
function updateDots() {
    const allDots = document.querySelectorAll('.dot');

    for (let i = 0; i < allDots.length; i++) {
        if (i === index) {
            allDots[i].classList.add('dot_selected');
        } else {
            allDots[i].classList.remove('dot_selected');
        }
    }
}


// Fonction pour changer de slide

function ChangeSlide(sens) {
    index += sens;
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
		index = slides.length -1;
	}
    
    document.getElementById("slide").src = "./assets/images/slideshow/" + slides[index].image;
	const tagLine = document.querySelector("#banner p");
	tagLine.innerHTML = slides[index].tagLine;
  
	// Mettre à jour l'apparence des dots après avoir changé de slide
	updateDots();
}

	 
// Appeler la fonction pour afficher les dots au chargement de la page
displayDots();

// Gestion des événements pour les flèches de navigation

document.querySelector('.arrow_left').addEventListener('click', () => ChangeSlide(-1));
document.querySelector('.arrow_right').addEventListener('click', () => ChangeSlide(1));
