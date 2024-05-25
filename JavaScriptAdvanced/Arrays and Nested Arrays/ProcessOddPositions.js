function processOddPositions(arr) {
  let resultArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 != 0) {
      resultArr.push(arr[i] * 2);
    }
  }
  console.log(resultArr.reverse());
}
processOddPositions([10, 15, 20, 25]);