function sumFirstLast(arr) {
  let firstVal = Number(arr[0]);
  let lastVal = Number(arr.pop());
  console.log(firstVal + lastVal);
}
sumFirstLast(['20', '30', '40']);