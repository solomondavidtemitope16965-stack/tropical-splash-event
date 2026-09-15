/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


/* CLOSE MOBILE MENU AFTER CLICKING A LINK */

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});


/* =========================
   EVENT COUNTDOWN
========================= */

/*
   Event:
   September 27, 2026
   2:00 PM
*/

const eventDate = new Date("September 27, 2026 14:00:00").getTime();

function updateCountdown() {

  const now = new Date().getTime();

  const difference = eventDate - now;

  if (difference <= 0) {

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  document.getElementById("days").textContent =
    String(days).padStart(2, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================
   TICKET BUTTON
========================= */

const buyTicket = document.getElementById("buyTicket");

buyTicket.addEventListener("click", () => {

  alert(
    "Tropical Splash tickets will be available soon. Please check back or contact the event organizers."
  );

});
