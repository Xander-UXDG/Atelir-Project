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
const imageHeight = images[0].offsetHeight;
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
    anime({
        targets: ".vertical-carousel",
        translateY: ["0px",  `-${imageHeight * totalImages}px`],
        easing: "linear",
        duration: 8000,
        loop: true
    });
});

