// This is the array containing the images and text for each slide
const slides = [
	{
		image: "assets/images/slideshow/slide1.jpg",
		tagLine: "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image: "assets/images/slideshow/slide2.jpg",
		tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image: "assets/images/slideshow/slide3.jpg",
		tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image: "assets/images/slideshow/slide4.png",
		tagLine: "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

//In order to start at the first slide
let currentSlideIndex = 0; 
const imageElement = document.querySelector('.banner-img img'); // Select the image in the banner
const textElement = document.querySelector('#banner p'); // Select the paragraph in the banner
const dots = document.querySelectorAll('.dot'); // Select all dots

// This function updates the carousel to show the current slide
function showSlide(index) {
	imageElement.src = slides[index].image; // changes the images in my constant slides
	textElement.innerHTML = slides[index].tagLine; // Change the text

	// Update the dots to highlight the current one
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add('dot_selected'); // Highlight the current dot
		} else {
			dot.classList.remove('dot_selected'); // Remove highlight from other dots
		}
	});
}

// Functions to go to the next or previous slide
function nextSlide() {
	currentSlideIndex = (currentSlideIndex + 1) % slides.length; // Move to the next slide, (loop to start if needed ..found on internet)
	showSlide(currentSlideIndex); // Show the updated slide
}

function prevSlide() {
	currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length; // Move to the previous slide, (loop to start if needed ..found on internet)
	showSlide(currentSlideIndex); // Show the updated slide
}

// Event listeners for next and previous buttons
document.getElementById('next').addEventListener('click', nextSlide); // button to go forward
document.getElementById('prev').addEventListener('click', prevSlide); //  button to go backward

// Event listeners for dots to jump to specific slides
dots.forEach((dot, index) => {
	dot.addEventListener('click', () => {
		currentSlideIndex = index; // Set the slide index based on dot clicked
		showSlide(currentSlideIndex); // Show the selected slide
	});
});

// Show the first slide initially when the page loads
showSlide(currentSlideIndex);// which is automatically 0 (the first slide)



  



  