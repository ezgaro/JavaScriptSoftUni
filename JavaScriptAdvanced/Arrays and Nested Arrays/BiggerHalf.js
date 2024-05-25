function biggerHalf(arr) {
  arr.sort((a,b) => a-b);
  let result = "";
  console.log(arr.length);
  if(arr.length % 2 == 0) {
    let k = arr.length / 2;
    for(let i = arr.length - 1; i >= arr.length - k; i--) {
      result += arr[i] + " ";
    }
  } else {
    let k = arr.length / 2 + 1;
    for(let i = arr.length - 1; i >= arr.length - k; i--) {
      result += arr[i] + " ";
    }
  }
  console.log(result);
}
biggerHalf([3, 19, 14, 7, 2, 19, 6]);