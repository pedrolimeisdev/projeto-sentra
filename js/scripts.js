document.addEventListener("DOMContentLoaded", () => {

    const astro = document.querySelector(".hero-media");
    const text = document.querySelector(".hero-text");
    const bg = document.querySelector(".background");
    const cards = document.querySelectorAll(".card");

    let mouseX = 0;
    let mouseY = 0;

    let smoothX = 0;
    let smoothY = 0;

    let velocityX = 0;
    let velocityY = 0;

    let lastX = 0;
    let lastY = 0;

    let timeout;
    let isMoving = false;

    document.addEventListener("mousemove", (e) => {

        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        mouseX = (e.clientX - centerX) / 50;
        mouseY = (e.clientY - centerY) / 50;

        velocityX = e.clientX - lastX;
        velocityY = e.clientY - lastY;

        lastX = e.clientX;
        lastY = e.clientY;

        isMoving = true;

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            isMoving = false;
        }, 120);
    });

    function animate() {

        smoothX += (mouseX - smoothX) * 0.06;
        smoothY += (mouseY - smoothY) * 0.06;

        const speed = Math.min(Math.abs(velocityX) + Math.abs(velocityY), 40);

        if (astro) {
            astro.style.transform =
                `translate3d(${smoothX * 2}px, ${smoothY * 2}px, 0)
                 rotate(${smoothX * 0.3 + speed * 0.02}deg)`;
        }

        if (text) {
            text.style.transform =
                `translate3d(${smoothX * 0.6}px, ${smoothY * 0.6}px, 0)`;
        }

        if (bg) {
            bg.style.transform =
                `translate3d(${smoothX * 0.2}px, ${smoothY * 0.2}px, 0) scale(1.1)`;
        }

        cards.forEach((card, i) => {

            const depth = (i + 1) * 0.15;

            const x = smoothX * depth;
            const y = smoothY * depth;

            card.style.transform =
                `translate3d(${x}px, ${y}px, 0)`;
        });

        requestAnimationFrame(animate);
    }

    animate();

 const heatWidget = document.getElementById("heat-widget");
const heatCount = document.getElementById("heat-count");
const heatTime = document.getElementById("heat-time");

let currentValue = 120;

/* 🔥 atualização de dados */
function updateHeat() {

    const variation = Math.floor(Math.random() * 10 - 4);
    currentValue = Math.max(0, currentValue + variation);

    heatCount.textContent = currentValue;

    const now = new Date();
    heatTime.textContent =
        now.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit"
        });
}

updateHeat();
setInterval(updateHeat, 3000);

document.addEventListener("mousemove", (e) => {

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    mouseX = (e.clientX - centerX) / 60;
    mouseY = (e.clientY - centerY) / 60;
});

function animateHeatWidget() {

    smoothX += (mouseX - smoothX) * 0.05;
    smoothY += (mouseY - smoothY) * 0.05;

    if (heatWidget) {
        heatWidget.style.transform =
            `translate3d(${smoothX}px, ${smoothY}px, 0)`;
    }

    requestAnimationFrame(animateHeatWidget);
}

animateHeatWidget();
});