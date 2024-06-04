function subSum(arr, startIndex, endIndex) {
  if(!Array.isArray(arr)) {
    return NaN;
  }
  if(startIndex < 0 ) {
    startIndex = 0;
  } else if(endIndex >= arr.length) {
    endIndex = arr.length - 1;
  }
  return arr
    .slice(startIndex, endIndex + 1)
    .filter(el => typeof el == 'number')
    .reduce((a, b) => a + b, 0);
}

console.log(subSum([10, 20, 30, 40, 50, 60], 3, 300));