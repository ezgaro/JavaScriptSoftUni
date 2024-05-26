function sortingNumbers(arr) {
  let resultArr = [];
  arr.sort((a, b) => a-b);

  while(arr.length > 0) {
      resultArr.push(arr.shift());
      resultArr.push(arr.pop());
    }
    console.log(resultArr);
}
sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);