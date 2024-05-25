function biggerstElements(arr) {
  let [arr1, arr2] = arr;
  let max = Number.MIN_VALUE;

  for(let i = 0; i < arr1.length; i++) {
    if(max < arr1[i]) {
      max = arr1[i];
    }
  }
  for(let i = 0; i < arr2.length; i++) {
    if(max < arr2[i]) {
      max = arr2[i];
    }
  }

  console.log(max);
}
biggerstElements([[20, 50, 10],[8, 33, 145]]);