import { aboutView } from './views/about.js';
import { articlesView  } from './views/articles.js';
import { homeView } from './views/home.js';
import page from '/node_modules/page/page.mjs';

page('/home', homeView);
page('/articles', articlesView);
page('/about', aboutView);

page.start();