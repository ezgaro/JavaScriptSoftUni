const express = require('express');
// const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const auth = require('./auth');
const bcrypt = require('bcrypt');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(expressSession({
  secret: 'super secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}));

app.use(auth());

app.get('/', (req, res) => {
  const user = req.session.user || {username: 'Anonymous'};
  res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Home</title>
      </head>
      <body>
        <p>Hello ${user.username}</p>
        <a href="/login">Login</a><br>
        <a href="/register">Register</a><br>
      </body>
    </html>
    `);
});

app.get('/login', (req, res) => {
   res.sendFile(__dirname + '/login.html');
});

app.post('/login', async (req, res) => {
  if(await req.auth.login(req.body.username, req.body.password)) {
    res.redirect('/');
  } else {
    res.status(401).send("Incorrect username or password !");
  }
});

app.get('/register', (req, res) => {
  res.sendFile(__dirname + '/register.html');
});


app.post('/register', async (req, res) => {
  if(await req.auth.register(req.body.username, req.body.password)) {
    res.redirect('/');
  } else {
    res.status(409).send('Username already exists !');
  }
});


app.listen(3000)