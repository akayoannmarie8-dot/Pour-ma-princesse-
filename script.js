// ==============================
// COMPTEUR DEPUIS LE 12 AOÛT 2026
// ==============================

const startDate = new Date("2026-08-12T00:00:00");

function updateCounter() {

    const now = new Date();

    let difference = now - startDate;

    if (difference < 0) {
        difference = 0;
    }

    const secondsTotal = Math.floor(difference / 1000);

    const days = Math.floor(secondsTotal / 86400);
    const hours = Math.floor((secondsTotal % 86400) / 3600);
    const minutes = Math.floor((secondsTotal % 3600) / 60);
    const seconds = secondsTotal % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCounter();

setInterval(updateCounter, 1000);


// ==============================
// LETTRE D'AMOUR
// ==============================

const letterButton = document.getElementById("letterButton");
const letter = document.getElementById("letter");

letterButton.addEventListener("click", function () {

    if (letter.style.display === "block") {

        letter.style.display = "none";
        letterButton.textContent = "💌 Une lettre d'amour";

    } else {

        letter.style.display = "block";
        letterButton.textContent = "💖 Fermer la lettre";

    }

});


// ==============================
// COEURS QUI MONTENT
// ==============================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

setInterval(createHeart, 700);


// ==============================
// ÉTOILES / ÉTINCELLES
// ==============================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";
    sparkle.textContent = "✨";

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.top = Math.random() * 100 + "vh";

    document.getElementById("sparkles").appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

setInterval(createSparkle, 500);
