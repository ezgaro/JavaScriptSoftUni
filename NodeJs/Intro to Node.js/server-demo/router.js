const { html } = require("./util");

const routes = {};

const defaultPage = `<h1>Not Found</h1>`;

function main(req, res) {
  console.log('>>>>>>', req.method, req.url);
  const url = new URL(req.url, `http://${req.headers.host}`);
  const actions = routes[url.pathname];
  if(actions) {
    const handler = actions[req.method];
    if(typeof handler === 'function') {
      handler(req, res);
    } else {
      defaultController(req, res);
    }
  } else {
    defaultController(req, res);
  }

}

function register(method, pathname, handler) {
  if(routes[pathname] == undefined) {
    routes[pathname] = {};
  }
  routes[pathname][method] = handler;
}

function get(pathname, handler) {
  register('GET', pathname, handler);
}

function post(pathname, handler) {
  register('POST', pathname, handler);
}

function del(pathname, handler) {
  register('DELETE', pathname, handler);
}


function defaultController(req ,res) {
  res.statusCode = 404;
  res.write(html(defaultPage));
  res.end();
}

module.exports = {
  main,
  register,
  get,
  post,
  del
};