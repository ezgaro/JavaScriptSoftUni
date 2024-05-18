function factorialDivision(num1 , num2) {
    let result = (factorial(num1) / factorial(num2));
    console.log(result.toFixed(2));
    
    function factorial(num) {
        if(num === 1) {
            return 1;
        } else {
            return num * factorial(num - 1);
        }
    }
}
factorialDivision(5,2);