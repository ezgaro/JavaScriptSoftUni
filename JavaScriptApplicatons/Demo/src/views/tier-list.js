import {html, render} from '../../node_modules/lit-html/lit-html.js';

// TODO Add tier list img to the server.js file and populate the interface with them
const template = () => html`
  <h1>Tier-list</h1>
`;

export const tierListPage = () => render(template(), document.querySelector('#root'));