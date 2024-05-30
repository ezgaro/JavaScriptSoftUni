function solve() {
  let textArea = document.getElementById('input');
  let output = document.getElementById('output');
  output.innerHTML = '';
  let paragraphs = textArea.value.split('.');
  for(let i = 0; i < paragraphs.length; i += 3) {
    let p = document.createElement('p');
    p.textContent = paragraphs[i] + (paragraphs[i + 1] || '') + (paragraphs[i + 2] || '');
    output.appendChild(p);
  }
}