function search() {
   let towns = document.querySelectorAll('#towns li');
   let searchText = document.getElementById('searchText').value;
   let result = document.getElementById('result');

   let arrofList = Array.from(towns);

   for(let el of arrofList) {
      let text = el.textContent;
      if(text.includes(searchText)) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      }
   }
}
