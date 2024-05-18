function calc(num1 ,operation , num2) {
    let result  = 0;
    if(operation === '+') {
        result = num1 + num2;
    } else if(operation === '-'){
        result = num1 - num2;
    } else if(operation === '/'){
        result = num1 / num2;
    } else if(operation === '*'){
        result = num1 * num2;
    }
    console.log(result.toFixed(2));
}
calc(5,'+',10);