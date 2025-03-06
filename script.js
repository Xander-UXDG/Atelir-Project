document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".draw-button").addEventListener("click", function() {
        window.location.href = "drawingboard.html";
    });
});

window.onload = function () {
    setTimeout (() => {
        document.getElementById("hero-active").style.opacity = "1"; }, 2000);
};

const carousel = document.querySelector('.carousel');
const images = Array.from(carousel.children);
const imgWidth = images[0].offsetWidth; 
const totalImages = images.length;

images.forEach(img => {
    let clone = img.cloneNode(true);
    carousel.appendChild(clone);
});

carousel.style.width = `${imgWidth * totalImages}px`;
carousel.style.left = "50%"; 
carousel.style.transform = "translateX(-50%)"; 


anime({
    targets: '.carousel',
    translateX: [`0px`, `-${imgWidth * totalImages}px`], 
    easing: 'linear',
    duration: 8000,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {
    const verticalCarousel = document.querySelector(".vertical-carousel");
    const images = Array.from(verticalCarousel.children);
    const totalImages = images.length;

    images.forEach(img => {
        let clone = img.cloneNode(true);
        verticalCarousel.appendChild(clone);
    });

    const imageHeight = images[0].offsetHeight;
    const totalHeight = imageHeight * totalImages;

    anime({
        targets: ".vertical-carousel",
        translateY: [0, -totalHeight],
        easing: "linear",
        duration: 8000,
        loop: true,
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

