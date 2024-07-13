const express = require('express');
// const cookieParser = require('cookie-parser');
const expressSession = require('express-session');

const app = express();

const users = {
  'svako': {
    username: 'svako',
    password: '123'
  }
};

app.use(express.urlencoded({extended: true}));
app.use(expressSession({
  secret: 'super secret',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}));

app.get('/', (req, res) => {
  console.log(req.session.user);

  const user = req.session.user || {username: 'Anonymous'};
  res.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <p>Hello ${user.username}</p>
        <a href="/login">Login</a><br>
      </body>
    </html>
    `);
});

app.get('/login', (req, res) => {
   res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  const user = users[req.body.username];
  if(user && req.body.password === user.password) {
    console.log("Sucessfull login !!!");
    req.session.user = user;
  } else {
    res.status(401).send("Incorrect username or password");
  }
  res.redirect('/');
})

app.listen(3000)