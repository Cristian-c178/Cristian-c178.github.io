console.log(tempData);

document.addEventListener("DOMContentLoaded", () => {
  const peliculasContainer = document.getElementById("peliculas");

  tempData.forEach((pelicula) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const img = document.createElement("img");
    img.src = pelicula.poster;
    img.alt = pelicula.title;

    const playIcon = document.createElement("div");
    playIcon.classList.add("play-icon");
    playIcon.innerHTML = "&#9654;";

    const movieInfo = document.createElement("div");
    movieInfo.classList.add("movie-info");

    const title = document.createElement("h2");
    title.textContent = pelicula.title;

    const details = document.createElement("p");
    details.innerHTML = `<strong>Year:</strong> ${pelicula.year}<br>
                             <strong>Director:</strong> ${pelicula.director}<br>
                             <strong>Duration:</strong> ${pelicula.duration}<br>
                             <strong>Genre:</strong> ${pelicula.genre.join(
                               ", "
                             )}<br>
                             <strong>Rate:</strong> ${pelicula.rate}`;

    movieInfo.appendChild(title);
    movieInfo.appendChild(details);

    overlay.appendChild(img);
    overlay.appendChild(playIcon);
    overlay.appendChild(movieInfo);
    card.appendChild(overlay);

    peliculasContainer.appendChild(card);
  });
});

window.addEventListener("scroll", function () {
  let nav = document.querySelector("nav");
  let cards = document.querySelector(".peliculas-container");
  if (window.pageYOffset >= cards.offsetTop) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

var cards = document.querySelectorAll(".card");
cards.forEach(function (card) {
  card.addEventListener("click", function () {
    var h2 = card.querySelector("h2");
    var p = card.querySelector(".movie-info p");
    h2.classList.toggle("hidden");
    p.classList.toggle("hidden");
  });
});