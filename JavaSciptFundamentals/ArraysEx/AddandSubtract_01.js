function addAndSubtract(arr) {
    let sumFirstArr = 0;
    let sumSecondArr = 0;
    for(let i = 0 ; i < arr.length ; i++) {
        sumFirstArr += arr[i];
        if(arr[i] % 2 === 0) {
            arr[i] += i;
            sumSecondArr+= arr[i];
        } else {
            arr[i] -= i;
            sumSecondArr += arr[i];
        }
    }

    
    console.log(arr);
    console.log(sumFirstArr);
    console.log(sumSecondArr);

}

addAndSubtract([5, 15, 23, 56, 35]);