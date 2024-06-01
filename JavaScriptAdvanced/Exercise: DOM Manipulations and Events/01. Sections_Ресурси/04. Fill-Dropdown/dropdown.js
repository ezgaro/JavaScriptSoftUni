function addItem() {
    let textValue = document.querySelector('#newItemText').value;
    let valValue = document.querySelector('#newItemValue').value;
    let optionElement = document.createElement('option');
    optionElement.value = valValue;
    optionElement.textContent = textValue;
    document.querySelector('#menu').appendChild(optionElement);
}