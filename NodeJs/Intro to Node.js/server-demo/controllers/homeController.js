const { html } = require("../util");

const homePage = `
  <h1>Home</h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate maxime amet quae perferendis in sed iste soluta, dolore iusto ut consequuntur expedita. Repudiandae molestiae corporis illum ratione nobis ipsa soluta!</p>
`;
function homeController(req, res) {
  res.write(html(homePage));
  res.end();
}
module.exports = { homeController };
