import { alienPlanets } from './alienPlanets.js';

document.addEventListener("DOMContentLoaded", () => {
  const planetContainer = document.querySelector(".planet-container");

  for (let planet of alienPlanets) {
    const alienDiv = document.createElement("div");
    alienDiv.className = "alienDiv";

    const planetName = document.createElement("h4");
    planetName.textContent = planet.name;

    const emoji = document.createElement("p");
    emoji.className = "emoji";
    emoji.textContent = planet.emoji;

    alienDiv.appendChild(planetName);
    alienDiv.appendChild(emoji);
    planetContainer.appendChild(alienDiv);
  }
});
