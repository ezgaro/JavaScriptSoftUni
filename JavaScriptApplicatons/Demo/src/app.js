import page from '../node_modules/page/page.mjs';
import { homePage } from './views/homeView.js';
import { loginPage } from './views/loginPage.js';
import { tierListPage } from './views/tier-list.js';

page('/', homePage);
page('/login', loginPage);
page('/tier-list', tierListPage);
page.start();

