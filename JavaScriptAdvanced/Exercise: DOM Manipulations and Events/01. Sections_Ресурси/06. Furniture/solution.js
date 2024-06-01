function solve() {
  let [_, buyTextAreaValue] = Array.from(document.querySelectorAll('textarea'))
  let [generateButton, buyButton] = Array.from(document.querySelectorAll('button'));
  let tableBody = document.querySelector('table tbody');

  generateButton.addEventListener('click', async (e) => {
    let response = await fetch('furniture.json');
    let furnitureData = await response.json();
    furnitureData.forEach(furniture => {
      let row = document.createElement('tr');

      let imgCell = document.createElement('td');
      let img = document.createElement('img');
      img.src = furniture.img;
      imgCell.appendChild(img);

      let nameCell = document.createElement('td');
      nameCell.textContent = furniture.name;

      let priceCell = document.createElement('td');
      priceCell.textContent = furniture.price;

      let decFactorCell = document.createElement('td');
      decFactorCell.textContent = furniture.decFactor;

      let checkCell = document.createElement('td');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkCell.appendChild(checkbox);

      row.appendChild(imgCell);
      row.appendChild(nameCell);
      row.appendChild(priceCell);
      row.appendChild(decFactorCell);
      row.appendChild(checkCell);

      tableBody.appendChild(row);
    });
  });

  buyButton.addEventListener('click', (e) => {
    let boughtFurniture = [];
    let totalPrice = 0;
    let totalDecFactor = 0;
    let count = 0;

    Array.from(document.querySelectorAll('input[type=checkbox]:checked')).forEach(checkbox => {
      let row = checkbox.parentElement.parentElement; // this will be the row of the checked checkbox and will look like: "<tr>...</tr>"
      let furnitureName = row.children[1].textContent; // this will look like: "Name: {furnitureName}"
      let furniturePrice = Number(row.children[2].textContent); // this will look like: "Price: {furniturePrice}"
      let furnitureDecFactor = Number(row.children[3].textContent); // this will look like: "Decoration factor: {furnitureDecFactor}"

      boughtFurniture.push(furnitureName); // this will add the furniture name to the boughtFurniture array
      totalPrice += furniturePrice; 
      totalDecFactor += furnitureDecFactor;
      count++;
    });

    buyTextAreaValue.value = `Bought furniture: ${boughtFurniture.join(', ')}\n`;
    buyTextAreaValue.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    buyTextAreaValue.value += `Average decoration factor: ${totalDecFactor / count}`;
  });
}