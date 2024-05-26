function magicMatrix(arr) {
  let sum = 0;
  let flag = true;
  for(let i = 0; i < arr.length; i++) {
    let curSum = arr[i].reduce((acc, el) => acc + el);
    if(i == 0) {
      sum = curSum;
    }
    if(sum !== curSum) {
      flag = false;
    }
  }
  console.log(flag);
}
magicMatrix([[11, 32, 45],
  [21, 0, 1],
  [21, 1, 1]]
  );