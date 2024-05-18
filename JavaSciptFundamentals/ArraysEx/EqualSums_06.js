function findEqualSumIndex(arr) {
    for(let i = 0; i < arr.length; i++) {
        let sumLeft = arr.slice(0, i).reduce((a, b) => a + b, 0);
        let sumRight = arr.slice(i + 1).reduce((a, b) => a + b, 0);

        if(sumLeft === sumRight) {
            console.log(i);
            return;
        }
    }

    console.log("no");
}

findEqualSumIndex([1, 2, 3, 3]); // Output: 2