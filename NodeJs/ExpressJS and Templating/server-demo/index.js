const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const homeController = require('./src/home');
const catalogRouter = require('./src/catalog');

app.engine('.hbs', hbs.create({
  extname:'.hbs'
}).engine);

app.set('view engine', '.hbs');

app.use('/content', express.static('static'));
app.get('/', homeController);
app.use('/catalog', catalogRouter);

app.listen(3000, () => console.log("Server listening on port 3000"));