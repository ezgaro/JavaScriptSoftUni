import {html, render} from '../../node_modules/lit-html/lit-html.js';
import { fetchNibas } from '../Requsts/getNibas.js';

//TODO Add group photo with some interesting interface and generate some text next to it.
//TODO Add the details functionality

const template = (data) =>html`
<h1>XD gang</h1>
<div class='nib-list'>
  ${data.map(x => html`
  <div class="card" style="width: 18rem">
    <img src="${x.img}" class="card-img-top" alt="${x.name}">
    <div class="card-body">
      <h5 class="card-title">${x.name}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/details" class="btn btn-primary">Details</a>
    </div>
  </div>
`)}
</div>
`;

// Fetch data and render the template
export const homePage = () => {
  fetchNibas().then(data => {
    render(template(data), document.querySelector('#root'));
  });
}
