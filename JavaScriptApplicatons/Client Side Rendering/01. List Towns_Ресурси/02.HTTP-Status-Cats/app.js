import * as cats from './catSeeder.js';
import {html, render} from '../node_modules/lit-html/lit-html.js';

const sectionElement = document.querySelector('#allCats');
const result = html`
<ul>
  ${cats.cats.map(cat => {
    let imgSrc = "./images/" + cat.imageLocation + ".jpg";

    return html`
  <li>
    <img src= ${imgSrc} width="250" height="250" alt="Card image cap" />
    <div class = "info">
      <button class="showBtn">Show status code</button>
      <div class="status" style="display: none" id="${cat.id}">
        <h4>Status Code: ${cat.statusCode}</h4>
        <p>${cat.statusMessage}</p>
      </div>
    </div>
  </li>
  `})};
</ul>
`;

render(result, sectionElement);

// Use requestAnimationFrame to ensure the DOM is updated
requestAnimationFrame(() => {
  // Now that the buttons are rendered, you can select them
  // If there are multiple buttons, you should use querySelectorAll and add event listeners to each
  document.querySelectorAll('.showBtn').forEach(button => {
    button.addEventListener('click', (e) => {
      // Select the .status div related to the clicked button
      const statusDiv = e.target.parentNode.querySelector('.status');

      // Toggle the display style and button text
      if (statusDiv.style.display === 'none') {
        statusDiv.style.display = 'block';
        e.target.textContent = 'Hide status code';
      } else {
        statusDiv.style.display = 'none';
        e.target.textContent = 'Show status code';
      }
    });
  });
});