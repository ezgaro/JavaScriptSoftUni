import page from '../node_modules/page/page.mjs';
import { homePage } from './views/homePage.js';
import { loginPage } from './views/loginPage.js';
import { logout } from './views/logoutPage.js';
import { registerPage } from './views/registerPage.js';
import { tierListPage } from './views/tierListPage.js';

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/tier-list', tierListPage);
page('/logout', logout);
page.start();