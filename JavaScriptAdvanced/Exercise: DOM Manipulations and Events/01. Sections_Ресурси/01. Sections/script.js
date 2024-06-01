function create(words) {
   let contentDiv = document.getElementById('content');
   words.forEach(word => {
      let element = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      element.appendChild(p);
      contentDiv.appendChild(element);
      element.addEventListener('click', (e) => {
         element.querySelector('div > p').style.display = 'block';
      });
   });
}