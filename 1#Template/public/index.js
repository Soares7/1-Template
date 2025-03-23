// Scroll Animation

function smoothScroll(targetSelector) {
    const target = document.querySelector(targetSelector);
    if (!target) {
        console.error(`Elemento não encontrado: ${targetSelector}`);
        return;
    }

    const targetPosition = target.offsetTop; 
    const startPosition = window.pageYOffset; 
    const distance = targetPosition - startPosition; 
    const duration = 800; 
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled'); 
    } else {
        nav.classList.remove('scrolled'); 
    }
});

// Click Menu
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    smoothScroll('#link-header');
});

link2.addEventListener('click', () => {
    smoothScroll('#link-plans');
});

link3.addEventListener('click', () => {
    smoothScroll('#link-footer');
});
///////////////////////////////////////////////////////////////