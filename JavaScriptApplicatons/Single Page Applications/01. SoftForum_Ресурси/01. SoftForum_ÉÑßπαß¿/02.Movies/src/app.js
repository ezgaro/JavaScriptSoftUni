import { createPage } from "./create.js";
import { homePage } from "./home.js";
import { loginPage } from "./login.js";
import { registerPage } from "./register.js";
import { showView } from "./utils.js";

const routes = {
  '/': homePage,
  '/login': loginPage,
  '/logout': logoutPage,
  '/register': registerPage,
  '/create': createPage
}
document.querySelector('nav').addEventListener('click', onNavigate);
document.querySelector('#add-movie-button a').addEventListener('click', onNavigate);

function onNavigate(e) {
  if(e.target.tagName == 'A' && e.target.href) {
    e.preventDefault();
    const url = new URL(e.target.href);
    const view = routes[url.pathname];
    if(typeof view == 'function') {
      view();
    }
  }
}

const detailsSection = document.querySelector('#movie-example');
const editSection = document.querySelector('#edit-movie');

function detailsPage() {
  showView(detailsSection);
}
function editPage() {
  showView(editSection);
}

function logoutPage() {
  alert('logged  out');
}

//Start appication in catalog view
homePage();