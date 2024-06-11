window.addEventListener("load", solve);

function solve() {
  let modelElement = document.querySelector("#model");
  let yearElement = document.querySelector("#year");
  let descElement = document.querySelector("#description");
  let priceElement = document.querySelector("#price");
  let addButton = document.querySelector("#add");
  let furnitureList = document.querySelector('#furniture-list');
  let totalPriceElement = document.querySelector('.total-price');

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      modelElement.value.trim() !== "" &&
      descElement.value.trim() !== "" &&
      Number(yearElement.value) > 0 &&
      Number(priceElement.value) > 0
    ) {
      let modelAndPriceRow = document.createElement('tr');
      modelAndPriceRow.classList.add('info');
      let modelTd = document.createElement('td');
      let priceTd = document.createElement('td');
      modelTd.textContent = modelElement.value;
      priceTd.textContent = Number(priceElement.value).toFixed(2);

      let actionsTd = document.createElement('td');
      let moreInfoBtn = document.createElement('button');
      moreInfoBtn.textContent = 'More Info';
      let buyBtn = document.createElement('button');
      buyBtn.textContent = 'Buy it';

      actionsTd.appendChild(moreInfoBtn);
      actionsTd.appendChild(buyBtn);

      modelAndPriceRow.appendChild(modelTd);
      modelAndPriceRow.appendChild(priceTd);
      modelAndPriceRow.appendChild(actionsTd);

      let hiddenInfoRow = document.createElement('tr');
      hiddenInfoRow.classList.add('hide');
      let yearAndDescTd = document.createElement('td');
      yearAndDescTd.setAttribute('colspan', '3');
      yearAndDescTd.textContent = `Year: ${yearElement.value} Description: ${descElement.value}`;
      hiddenInfoRow.appendChild(yearAndDescTd);

      furnitureList.appendChild(modelAndPriceRow);
      furnitureList.appendChild(hiddenInfoRow);

      // Clear input fields
      modelElement.value = '';
      yearElement.value = '';
      descElement.value = '';
      priceElement.value = '';

      moreInfoBtn.addEventListener('click', () => {
        if (moreInfoBtn.textContent === 'More Info') {
          moreInfoBtn.textContent = 'Less Info';
          hiddenInfoRow.style.display = 'contents';
        } else {
          moreInfoBtn.textContent = 'More Info';
          hiddenInfoRow.style.display = 'none';
        }
      });

      buyBtn.addEventListener('click', () => {
        let price = parseFloat(priceTd.textContent);
        let currentTotal = parseFloat(totalPriceElement.textContent);
        totalPriceElement.textContent = (currentTotal + price).toFixed(2);
        modelAndPriceRow.remove();
        hiddenInfoRow.remove();
      });
    }
  });
}