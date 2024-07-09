const app = require("express")();
const handlebars = require("express-handlebars");

//making the extension to be .hbs not .handlebars
const hbs = handlebars.create({
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

let visitors = 0;

let products = [
  { name: "Widget", price: 49 },
  { name: "Gadjet", price: 19 },
  { name: "Fluxor", price: 13 , promoted: true},
];

app.get("/", (req, res) => {
  res.locals = {
    count: visitors++,
    user: {
      username: "peter",
      email: "peter@gmail.com"
    }
  };
  res.render("home");
});

app.get('/catalog', (req, res) => {
  res.locals = {
    products
  }
  res.render('catalog');
})


app.listen(3000);
