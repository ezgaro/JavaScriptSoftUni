import { html, render } from '../node_modules/lit-html/lit-html.js';

let inputElement = document.querySelector('#towns');
const loadBtn = document.querySelector('#btnLoadTowns');
const divEl = document.querySelector('#root');

const listTemplate = (data) => html
`
<ul>
  ${data.map(el => html`<li>${el}</li>`)}
</ul>
`;

loadBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const result = listTemplate(inputElement.value.split(', '));
  render(result, divEl);
  inputElement.value = '';
})