// Array with images and text for each slide
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

// Start at the first slide
let currentSlide = 0;

// To select elements from HTML file
const imageElement = document.querySelector('.banner-img img'); // For images
const textElement = document.querySelector('#banner p');        // For the tagline
const dotsContainer = document.querySelector('.dots');          // For the navigatin dots

// Function to create navigation dots
function createDots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('span'); // Creating a <span> for each dot
        dot.classList.add('dot');                  // Adding the "dot" class
        if (i === 0) dot.classList.add('dot_selected'); // Highlighting the first dot
        dotsContainer.appendChild(dot);           // add the dots to container (.dot)
    }
}

// Function to update carousel
function updateSlide() {
    // Change the image and text
    imageElement.src = slides[currentSlide].image;
    textElement.innerHTML = slides[currentSlide].tagLine;

    // Update the dots
    const allDots = document.querySelectorAll('.dot'); // Select all dots
    allDots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('dot_selected'); // Highlight the active dot
        } else {
            dot.classList.remove('dot_selected'); // Remove highlight from others
        }
    });
}
// Go to the next slide
function nextSlide() {
    currentSlide = currentSlide + 1; //Go to next slide
    if (currentSlide > slides.length - 1) { // If it exceeds the last slide index
        currentSlide = 0; // Go back to the first slide
    }
    updateSlide(); // Update the slide display
}

// Go to the previous slide
function prevSlide() {
    currentSlide = currentSlide - 1; //Go to last slide
    if (currentSlide < 0) { // If it goes below the first slide index
        currentSlide = slides.length - 1; // Go to the last slide
    }
    updateSlide(); // Update the slide display
}

// Add event listeners to the navigation arrows
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('prev').addEventListener('click', prevSlide);

// Add click events to the dots
function addDotEvents() {
    const allDots = document.querySelectorAll('.dot');
    allDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index; // Set the current slide to the dot's index
            updateSlide();
        });
    });
}

// Initialize the carousel
createDots();       // Create the navigation dots
updateSlide();      // Show the first slide
addDotEvents();     // Enable dot navigation
