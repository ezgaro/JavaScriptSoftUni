import { html, render } from '../node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const divElement = document.querySelector('#towns');
const resultMatches = document.querySelector('#result');
const buttonSearch = document.querySelector('button');

// Function to render the list of towns, highlighting the matches
function updateList(searchText = '') {
  const template = html`
  <ul>
     ${towns.map(town => html`<li class=${searchText && town.includes(searchText) ? 'active' : ''}>${town}</li>`)}
  </ul>
  `;
  render(template, divElement);

  // Count and display the number of matches
  const matches = towns.filter(town => town.includes(searchText)).length;
  resultMatches.textContent = `${matches} matches found`;
}

// Initial render with no search text
updateList();

// Implement the search function to react on button click
function search() {
  buttonSearch.addEventListener('click', () => {
    const searchBar = document.querySelector('#searchText').value;
    updateList(searchBar);
  });
}

search();