// Waits for the DOM (HTML) to be fully loaded before executing the function
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".draw-button").addEventListener("click", function() {
        window.location.href = "drawingboard.html";
    });
});
// Executes when the window has fully loaded
window.onload = function () {  // Sets a timeout to gradually display an element with the ID "hero-active" after 2 seconds
    setTimeout (() => {
        document.getElementById("hero-active").style.opacity = "1"; }, 2000);
};
// Selects the carousel element
const carousel = document.querySelector('.carousel');
// Converts the carousel's child elements (images) into an array
const images = Array.from(carousel.children);
// Gets the width of a single image
const imgWidth = images[0].offsetWidth; 
// Stores the total number of images
const totalImages = images.length;

// Loops through each image in the carousel
images.forEach(img => {
        // Creates a clone of each image
    let clone = img.cloneNode(true);
    // Appends the cloned image to the carousel for an infinite loop effect
    carousel.appendChild(clone);
    
});
// Sets the total width of the carousel to accommodate all images
carousel.style.width = `${imgWidth * totalImages}px`;
// Centers the carousel in the container itself
carousel.style.left = "50%"; 
carousel.style.transform = "translateX(-50%)"; 

// Uses Anime.js to animate the carousel, making it scroll infinitely from left to right
anime({
    targets: '.carousel',
    translateX: [`0px`, `-${imgWidth * totalImages}px`], // Moves the carousel left
    easing: 'linear', // Makes the animation look smoother
    duration: 8000, // Animation duration (8 seconds)
    loop: true // Enables continuous loop
});

// Waits for the DOM to be fully loaded before executing the function
document.addEventListener("DOMContentLoaded", function () {
        // Selects all elements with the class "vertical-carousel"
    const verticalCarousels = document.querySelectorAll(".vertical-carousel");

    // Loops through each vertical carousel
    verticalCarousels.forEach(verticalCarousel => {
        // Converts the carousel's child elements (images) into an array
        const images = Array.from(verticalCarousel.children);
        // Stores the total number of images
        const totalImages = images.length;

        // Loops through each image in the vertical carousel
        images.forEach(img => {
             //Clones each image
            let clone = img.cloneNode(true);
            // Appends the cloned image to the vertical carousel for an infinite loop effect
            verticalCarousel.appendChild(clone);
        });
        // Gets the height of a single image
        const imageHeight = images[0].offsetHeight;
         // Calculates the total height of the carousel
        const totalHeight = imageHeight * totalImages;
        
        // Uses Anime.js to animate the vertical carousel, making it scroll infinitely from top to bottom
        anime({
            targets: verticalCarousel,
            translateY: [0, -totalHeight],
            easing: "linear",
            duration: 8000,
            loop: true,
        });
    });
});


function generatePrompt() {
    const prompts = [
        'portrait of lady near a cobblestone wall',
        'sunset over a mountain range',
        'a cat sitting on a windowsill',
        'a bustling city street',
        'a serene beach scene'
    ];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    document.getElementById('prompt').innerText = randomPrompt;
}

