function SmallestTwoNumbers(arr) {
  arr.sort((a,b) => a-b);
  console.log(arr[0] + " " + arr[1]);
}
SmallestTwoNumbers([3, 0, 10, 4, 7, 3]);