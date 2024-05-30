function solve() {
    let number = Number(document.getElementById('input').value);
    let to = document.getElementById('selectMenuTo').value;
    let result = document.getElementById('result');

    if(to === 'binary') {
        result.textContent = (number >>> 0).toString(2);
    } else {
        result.textContent = number.toString(16).toUpperCase();
    }
}