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
  res.send('<p>Hello</p>');
});

app.get('/login', (req, res) => {
   res.sendFile('login.html');
})

app.listen(3000)