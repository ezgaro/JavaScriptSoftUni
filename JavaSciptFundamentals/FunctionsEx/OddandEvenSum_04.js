function oddandEvenSum(number) {
    let numberString = String(number);
    let sumEven = 0;
    let sumOdd = 0;
    for(let i = 0 ; i < numberString.length ; i++) {
        if(+numberString[i] % 2 === 0) {
            sumEven += +numberString[i]; 
        } else {
            sumOdd += +numberString[i];
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
oddandEvenSum(3495892137259234);