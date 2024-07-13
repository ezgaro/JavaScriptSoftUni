const express = require('express');
// const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();

app.use(expressSession({
  secret: 'super secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/login', (req, res) => {
   res.sendFile('login.html');
});

app.post('/login', (req, res) => {
  console.log(req.body);
  res.redirect('/');
})

app.listen(3000)