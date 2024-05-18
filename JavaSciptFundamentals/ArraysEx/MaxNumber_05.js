function findTopIntegers(arr) {
    let result = [];
    for(let i = 0 ; i < arr.length ; i++) {
        let curNum = arr[i];
        let isTop = true;
        for(let j = i + 1 ; j < arr.length ; j++) {
            let rightNum = arr[j];
            if(curNum <= rightNum) {
                isTop = false;
            }2
        }

        if(isTop) {
            result.push(curNum);
        }
    }
    console.log(result.join(" "));
}

findTopIntegers([14, 24, 3, 19, 15, 17]); // Output: 24, 19, 17