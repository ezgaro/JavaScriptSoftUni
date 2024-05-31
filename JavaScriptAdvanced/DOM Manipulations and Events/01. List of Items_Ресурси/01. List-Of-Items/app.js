function addItem() {
    let ul = document.getElementById('items');
    let textInput = document.getElementById('newItemText');
    let text = textInput.value;
    let newEl = document.createElement('li');
    newEl.textContent = text;
    ul.appendChild(newEl);
    textInput.value = '';
}