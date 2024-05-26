function extractIncreasingSubsequenceFromArray(arr) {
  let curMax = Number.MIN_VALUE;
  let resultArr = [];
  for(let num of arr) {
    if(curMax <= num) {
      curMax = num;
      resultArr.push(num);
    }
  }

  console.log(resultArr);
}
extractIncreasingSubsequenceFromArray([1,
  3,
  8,
  4,
  10,
  12,
  3,
  2,
  24]);