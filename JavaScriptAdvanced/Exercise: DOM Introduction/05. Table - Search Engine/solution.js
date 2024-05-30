function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let searchText =  document.getElementById('searchField');
      let table = Array.from(document.querySelectorAll('tbody tr'));
      for(let textField of table) {
         let tds = textField.querySelectorAll('td');
         tds.forEach((n) => {
            textField.classList.remove('select');
         })
         tds.forEach((n) => {
            if(n.textContent.includes(searchText.value)) {
               textField.className = 'select';
            }
         })
      }
      searchText.value = '';

   }
}