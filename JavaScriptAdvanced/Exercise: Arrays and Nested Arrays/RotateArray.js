function rotateArray(arr, rotator) {
  while(rotator-- > 0) {
    let shiftedValue = arr.pop();
    arr.unshift(shiftedValue);
  }
  console.log(arr.join(" "));
}

rotateArray(['1',
'2',
'3',
'4'],
2
);