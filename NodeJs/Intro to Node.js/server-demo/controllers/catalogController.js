const { html, data } = require("../util");

const catalogPage = (data) => `
  <h1>Catalog</h1>
  <h2>Ima li bagashve mursho</h2>
  <form method="POST" action="/catalog">
    <label>Name: <input type="text" name="name"/></label>
    <label>Color:
      <select name="color">
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
      </select>
    </label>
    <input type="submit" value="Create item"/>
  </form>
  <ul>
    ${data.map(i => `
      <li>${i.name} - ${i.color}
        <form method="POST" action="/catalog" style="display:inline;">
          <input type="hidden" name="name" value="${i.name}"/>
          <button type="submit">Delete</button>
        </form>
      </li>
    `).join('')}
  </ul>`;

function catalogController(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(html(catalogPage(data)));
  res.end();
}

function createController(req, res) {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const parsedData = new URLSearchParams(body);
    const name = parsedData.get('name');
    const color = parsedData.get('color');

    if (name && color) {
      // Add the new item to the data array
      data.push({ name: name, color: color });
    }

    // Redirect to the catalog page to display the updated list
    res.writeHead(302, { 'Location': '/catalog' });
    res.end();
  });
}

function deleteController(req, res) {
  let body = '';

  req.on('data', chunk => {
    body += chunk.toString();
  });

  req.on('end', () => {
    const parsedData = new URLSearchParams(body);
    const name = parsedData.get('name');
    console.log(parsedData);
    console.log(name);

    if (name) {
      const index = data.findIndex(item => item.name === name);
      console.log(index);
      if (index !== -1) {
        data.splice(index, 1);
      }
    }

    // Redirect to the catalog page to display the updated list
    res.writeHead(302, { 'Location': '/catalog' });
    res.end();
  });
}

module.exports = { catalogController, createController, deleteController };
