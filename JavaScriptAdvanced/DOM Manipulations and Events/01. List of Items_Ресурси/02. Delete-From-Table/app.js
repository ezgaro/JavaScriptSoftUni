function deleteByEmail() {
    let trs = document.querySelectorAll('tr td:nth-of-type(2)');
    let textInp = document.querySelector('input[name="email"]').value;
    let elements = Array.from(trs);
    let targetEl = elements.find(x => x.textContent == textInp);
    targetEl.parentNode.remove(targetEl);
}