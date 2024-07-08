const http = require('http');
const fs = require('fs');
const {get, post, match} = require('./src/router');
const { home } = require('./src/controllers/home');
const { catalog, createGet, createPost, editGet, editPost } = require('./src/controllers/catalog');

get('/', home);
get('/catalog', catalog);
get('/create', createGet);
post('/create', createPost);
get('/edit', editGet);
post('/edit', editPost);

http.createServer((req, res) => {
  //Sigma strat

  if(req.url == '/favicon.ico') {
    fs.createReadStream('./src/static/favicon.ico').pipe(res);
  } else if(req.url.startsWith('/public/')) {
    fs.createReadStream(`./src/static/${req.url.slice(8)}`).pipe(res);
  } else {
    match(req, res);
  }


  //Tapanar strat
  // const url = new URL(req.url, `http://${req.headers.host}`);
  // if(url.pathname === '/') {
  //   fs.createReadStream('./static/index.html').pipe(res);
  // } else if(url.pathname === '/catalog') {
  //   fs.createReadStream('./static/catalog.html').pipe(res);
  // } else if(url.pathname == '/favicon.ico') {
  //   fs.createReadStream('./static/favicon.ico').pipe(res);
  // } else if(url.pathname == '/site.css') {
  //   fs.createReadStream('./static/site.css').pipe(res);
  // }
}).listen(3000);

