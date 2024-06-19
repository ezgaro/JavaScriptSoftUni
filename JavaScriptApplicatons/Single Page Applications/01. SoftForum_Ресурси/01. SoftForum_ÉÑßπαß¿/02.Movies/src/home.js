import { showView, spinner } from "./utils.js";

const section = document.querySelector("#home-page");
const catalog = section.querySelector("#movie .card-deck.d-flex.justify-content-center");

export function homePage() {
  showView(section);
  displayMovies();
}

async function displayMovies() {
  try {
    catalog.replaceChildren(spinner());
    const movies = await getMovies();
    catalog.replaceChildren(...movies.map(createMoviePreview));
  } catch (error) {
    console.error("Failed to load movies:", error);
    // Optionally, display an error message to the user
  }
}

function createMoviePreview(movie) { // Added 'movie' parameter
  const element = document.createElement("div");
  element.className = "card mb-4";
  element.innerHTML = `
    <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400" />
    <div class="card-body">
      <h4 class="card-title">${movie.title}</h4>
      <a href="#"> </a>
    </div>
    <div class="card-footer">
      <a data-id="${movie._id}" href="/details/${movie._id}">
        <button type="button" class="btn btn-info">Details</button>
      </a>
    </div>
  `;
  return element;
}

async function getMovies() {
  try {
    const res = await fetch("http://localhost:3030/data/movies");
    if (!res.ok) throw new Error(`Failed to fetch movies: ${res.statusText}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow to handle it in the calling function
  }
}