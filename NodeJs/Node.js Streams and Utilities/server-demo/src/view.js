const fs = require('fs');

const layout = fs.readFileSync('./src/static/layout.html').toString();

function loadFragment(name, cb) {
  fs.readFile(`./src/static/${name}.html`, (err, data) => cb(data.toString()));
}

function render(body, title = 'Server Demo') {
  return layout.replace('{{{body}}}', body).replace('{{{title}}}', title);
}

module.exports = {
  loadFragment,
  render
}