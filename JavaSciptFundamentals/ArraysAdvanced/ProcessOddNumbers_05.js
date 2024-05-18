function processOddNumbers(arr) {
    let arr1 = [];
    for(let i = 0 ; i < arr.length ; i++ ) {
        if(i % 2 !== 0) {
            arr1.push(arr[i]);
        }
    } 
    
    arr1 = arr1.map(n => n * 2).reverse();
    console.log(arr1.join(" "));
}
processOddNumbers([3, 0, 10, 4, 7, 3]);