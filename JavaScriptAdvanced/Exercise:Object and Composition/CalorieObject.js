function calorieObject(arr) {
  let resObj = {};
  for(let i = 0; i < arr.length; i+= 2){
    resObj[arr[i]] = Number(arr[i + 1]);
  }
  console.log(resObj);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);