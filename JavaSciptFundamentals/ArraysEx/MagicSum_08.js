function printUniquePairs(arr, num) {
    let foundPairs = [];

    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === num) {
                let pair = [arr[i], arr[j]].sort((a, b) => a - b).toString();

                if(!foundPairs.includes(pair)) {
                    console.log(arr[i] + " " + arr[j]);
                    foundPairs.push(pair);
                }
            }
        }
    }
}

printUniquePairs([1, 7, 6, 2, 19, 23], 8); // Output: 1 7, 6 2