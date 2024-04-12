// Countdown timer
var countDownDate = new Date("April 21, 2024 00:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("counter").innerHTML =
    days +
    " days " +
    hours +
    " hours " +
    minutes +
    " minutes " +
    seconds +
    " seconds";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);

// Star creation and movement
function createStar() {
  const screenHeight = window.innerHeight;
  const star = document.createElement("div");
  star.className = "point";
  star.style.left = window.innerWidth + "px";
  star.style.top = Math.random() * screenHeight + "px";
  document.body.appendChild(star);
  return star;
}

function moveStars() {
  const stars = document.querySelectorAll(".point");
  const delayTimes = [];

  // Calcolare i tempi di ritardo in modo casuale per ogni stella
  for (let i = 0; i < stars.length; i++) {
    delayTimes.push(Math.random() * 5000); // Aumenta il range del tempo di ritardo per consentire alle stelle di attraversare completamente lo schermo prima di sparire
  }
  delayTimes.sort(() => Math.random() - 0.5);

  stars.forEach((star, index) => {
    // Funzione per aggiungere l'animazione e impostare un nuovo timeout
    const animateStar = () => {
      setTimeout(() => {
        // Rimuovi l'animazione precedente
        star.classList.remove("moveStars");

        // Aggiungi un piccolo ritardo prima di aggiungere di nuovo l'animazione
        setTimeout(() => {
          // Aggiungi l'animazione
          star.classList.add("moveStars");

          // Chiamata ricorsiva per avviare nuovamente l'animazione dopo che è terminata
          animateStar();
        }, Math.random() * 5000); // Aumenta il range del tempo di ritardo per consentire alle stelle di attraversare completamente lo schermo prima di sparire
      }, delayTimes[index]);
    };

    // Avvia l'animazione per la stella corrente
    animateStar();
  });
}

for (let i = 0; i < 50; i++) {
  createStar();
}
moveStars();
