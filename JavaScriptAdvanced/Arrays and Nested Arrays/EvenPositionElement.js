function EvenPositionElement(arr) {
  let s = "";
  for(let i = 0; i <= arr.length; i++) {
    if (i % 2 == 0) {
      s += arr[i] + " ";
    }
  }
  console.log(s);
}
EvenPositionElement(['20', '30', '40', '50', '60']);