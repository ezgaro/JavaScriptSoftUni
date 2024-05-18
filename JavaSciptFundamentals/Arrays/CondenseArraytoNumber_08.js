function condenseArrayToNumber(arr) {
    while (arr.length > 1) {
        let newArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            newArr.push(arr[i] + arr[i + 1]);
        }
        arr = newArr;
    }
    return arr[0];
}
console.log(condenseArrayToNumber([2,10,3]));