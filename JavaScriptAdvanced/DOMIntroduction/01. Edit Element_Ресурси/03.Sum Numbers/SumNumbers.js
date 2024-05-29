function calc() {
    // TODO: sum = num1 + num2
    let num10 = document.getElementById("num1");
    let num20 = document.getElementById("num2");

    let num1 = Number(num10.value);
    let num2 = Number(num20.value);
    let sum = document.getElementById("sum");
    sum.value = num1 + num2;
}
