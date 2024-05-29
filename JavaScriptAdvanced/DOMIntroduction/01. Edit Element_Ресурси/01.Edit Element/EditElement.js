function editElement(selector, strToChange, name) {
    selector.textContent = selector.textContent.replaceAll(strToChange, name);
}