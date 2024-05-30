function subtract() {
    let num1 = document.getElementById('firstNumber');
    let num2 = document.getElementById('secondNumber');
    let sum = Number(num1.value) - Number(num2.value);

    let resultDiv = document.getElementById('result');
    resultDiv.append(sum);
}