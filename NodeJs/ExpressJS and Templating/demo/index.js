const express = require('express');
const catalogController = require('./catalog');
const { isAdmin } = require('./auth');

const app = express();

app.use('/public' ,express.static('public'));

app.get('/template', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.use('/catalog', (req, res, next) => {
  console.log(">>>>", req.params, req.headers);
  next();
},
  catalogController);

app.get('/', (req, res) => {
  res.send("Hello Express");
});

app.post('/create', isAdmin ,(req, res) => {
  res.status(201).send("Article created");
});

app.get('/catalog/:productId/:qq', (req, res) => {
  console.log(req.params);
  res.send("Nibbas");
})

app.all('*',  (req, res) => {
  res.send("404 Not Found");
})

app.listen(3000);
