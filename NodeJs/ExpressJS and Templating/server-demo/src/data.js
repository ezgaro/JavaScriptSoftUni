const fs = require('fs').promises;
const path = require('path');

async function readFile() {
  // Adjusted the path to include /server-demo/ before /data/
  const filePath = path.join('../products.json');
  const data = JSON.parse((await fs.readFile(filePath)).toString());
  return data;
}


async function getProducts() {
  const data = await  readFile();
  return Object.entries(data).map(([_id, item]) => Object.assign({}, item, {_id}));
}

async function createProduct(product) {
  const filePath = path.join('../products.json');
  const data = await  readFile();
  const _id = nextId();
  data[_id] = product;

   fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

async function getProductById(id) {
   const data = await readFile();
   return data[id];
}

function nextId() {
  return 'xxxxxxxx'.replace(/x/g,() => (Math.random() * 16 | 0).toString(16));
}

async function updateProduct(id, product) {
  const filePath = path.join('../products.json');
  const data = await readFile();
  data[id] = product;

  fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

module.exports = {
  getProducts,
  createProduct,
  getProductById,
  updateProduct
};