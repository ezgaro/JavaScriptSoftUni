function addAndRemoveElements(arr) {
  let resultArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] == "add") {
      resultArr.push(i + 1);
    } else if(arr[i] == "remove" && resultArr.length > 0) {
      resultArr.pop();
    } else  {
      console.log("Empty");
      break;
    }
  }
  resultArr.forEach(e => console.log(e));
}
addAndRemoveElements(['add',
'add',
'remove',
'add',
'add']
);