function simpleCalculator(n1 , n2 , operation) {
    if(operation === 'multiply') {
        console.log(n1 * n2);
    } else if(operation === 'divide'){
        console.log(n1 / n2);
    } else if(operation === 'add'){
        console.log(n1 + n2);
    } else if(operation === 'subtract'){
        console.log(n1 - n2);
    } 
}
simpleCalculator(5, 5, 'multiply');