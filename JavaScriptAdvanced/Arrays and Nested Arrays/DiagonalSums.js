function diagonalSums(arr) {
  let sumFirst = 0, sumLast = 0;
  for(let i = 0; i < arr.length; i++) {
    sumFirst += arr[i][i];
    sumLast += arr[i][arr.length - 1 - i];
  }
  console.log(sumFirst + " " + sumLast);
}

diagonalSums([[20,40], [10,60]]);