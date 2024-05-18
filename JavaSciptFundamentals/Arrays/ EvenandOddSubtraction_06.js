function evenAndOddSubstraction(arr) {
    let sumOdd = 0;
    let sumEven = 0;
    for(let i = 0 ; i < arr.length ; i++) {
        let currentNum = arr[i];
        if(currentNum % 2 === 0) {
            sumEven+=currentNum;
        } else {
            sumOdd += currentNum;
        }
    }

    console.log(sumEven - sumOdd);
}

evenAndOddSubstraction([1,2,3,4,5,6])