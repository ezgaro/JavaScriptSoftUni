const { html } = require("../util");

const aboutPage = `
  <h1>About</h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam, quasi.</p>
`;

function aboutController(req, res) {
  res.write(html(aboutPage));
  res.end();
}
module.exports = { aboutController };
