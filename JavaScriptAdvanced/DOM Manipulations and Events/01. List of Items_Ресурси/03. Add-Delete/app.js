function addItem() {
    let ulElement = document.querySelector('#items');
    let textInp = document.querySelector('#newItemText').value;
    let newElement = document.createElement('li');
    newElement.textContent = textInp;
    let deleteElement = document.createElement('a');
    deleteElement.href = '#';
    deleteElement.textContent = "[Delete]";
    newElement.appendChild(deleteElement);
    ulElement.appendChild(newElement);
    deleteElement.addEventListener('click', (e) => e.target.parentNode.remove());
}