import {html} from '../../node_modules/lit-html/lit-html.js';
import * as movieService from '../services/movieService.js';

const movieTemplate= (movie) => html`
<div class="card movie-card">
  <img class="card-img-top" src=${movie.img} alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

`;

const homeTemplate = (movies) => html`
  <h1>Movie List</h1>
  <div class="movie-list">
    ${movies.map(m => movieTemplate(m))}
  </div>
`;
export const homeView = (ctx) => {
  movieService.getAll()
  .then(movies => {
    ctx.render(homeTemplate(movies));
  })
};