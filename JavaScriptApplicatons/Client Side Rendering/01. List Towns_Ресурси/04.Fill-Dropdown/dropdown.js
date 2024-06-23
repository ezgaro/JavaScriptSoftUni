import { html, render } from "../node_modules/lit-html/lit-html.js";

// Fetch and render the initial dropdown options
async function fetchAndRenderOptions() {
  let menuSelection = document.querySelector("#menu");

  try {
    const response = await fetch(
      "http://localhost:3030/jsonstore/advanced/dropdown"
    );
    const data = await response.json();

    const optionsTemplate = html`
      ${Object.values(data).map(
        (el) => html`<option value="${el._id}">${el.text}</option>`
      )}
    `;

    render(optionsTemplate, menuSelection);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Function to add a new option dynamically
function addItem(text) {
  let menuSelection = document.querySelector("#menu");
  let opt = document.createElement('option');
  opt.textContent = text;
  menuSelection.appendChild(opt);
}

// Event listener for the submit button
document.querySelector('input[type="submit"]').addEventListener("click", (event) => {
  event.preventDefault(); // Prevent form submission if the button is in a form
  let itemText = document.querySelector("#itemText");
  addItem(itemText.value);
  itemText.value = '';
});

// Initial fetch and render of options
fetchAndRenderOptions();
