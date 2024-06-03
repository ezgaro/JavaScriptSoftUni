function calculator() {
    let num1 = 0;
    let num2 = 0;
    let result = 0;

    return {
        init: (num1ID, num2ID, resultID) => {
            num1 = document.querySelector(num1ID);
            num2 = document.querySelector(num2ID);
            result = document.querySelector(resultID);
        },
        add: () => {
            result.value = Number(num1.value) + Number(num2.value);
        },
        subtract: () => {
            result.value = Number(num1.value) - Number(num2.value);
        }
    }
}

const calculate = calculator ();
calculate.init ('#num1', '#num2', '#result');


