function solve() {
   let productsTitle = document.querySelectorAll('.product-title');
   let addButtons = document.querySelectorAll('.product-add');
   let checkoutButton = document.querySelector('.checkout');
   let textBox = document.querySelector('textarea');
   let cart = [];
   let total = 0;

   Array.from(addButtons).forEach((btn, i) => {
       btn.addEventListener('click', () => {
           let product = productsTitle[i].textContent;
           let price = Number(document.querySelectorAll('.product-line-price')[i].textContent);
           cart.push(product);
           total += price;
           textBox.value += `Added ${product} for ${price.toFixed(2)} to the cart.\n`;
       });
   });

   checkoutButton.addEventListener('click', () => {
       let uniqueProducts = [...new Set(cart)].join(', ');
       textBox.value += `You bought ${uniqueProducts} for ${total.toFixed(2)}.`;
       Array.from(addButtons).forEach(btn => btn.disabled = true);
       checkoutButton.disabled = true;
   });
}