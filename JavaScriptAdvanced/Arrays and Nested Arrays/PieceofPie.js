function pieceOfPie(arr, one, two) {
  let resultArr = [];
  let start, end;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == one) {
      start = i;
    } else if(arr[i] == two) {
      end = i;
    }
  }

  for(let i = start; i <= end; i++) {
    resultArr.push(arr[i]);
  }
  console.log(resultArr);
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
);