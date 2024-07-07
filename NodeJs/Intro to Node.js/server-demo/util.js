function html(html) {
  const layout = `<!DOCTYPE html>
<html lang="en">
<body>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/catalog">Catalog</a></li>
    </ul>
  </nav>
  ${html}
</body>
</html>`;
  return layout;
};

const data =  [
  {
    name: "Product 1",
    color: "red"
  },
  {
    name: "Product 2",
    color: "green"
  },
];

module.exports = {html, data};