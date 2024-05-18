function arrayModifier(input) {
  let index = 0;
  let arr = input[index].split(" ");
  index++;
  while (input[index] !== "end") {
    let commandArr = input[index].split(" ");
    let command = commandArr[0];
    let firstIndex = commandArr[1];
    let secIndex = commandArr[2];
    let el1 = arr[firstIndex];
    let el2 = arr[secIndex];
    switch (command) {
      case "swap":
        arr[firstIndex] = el2;
        arr[secIndex] = el1;
        
        break;
      case "multiply":
        let result = el1 * el2;
        arr[firstIndex] = result;    
        break;
      case "decrease":
        for(let i = 0; i < arr.length; i++) {
            arr[i]--;
        }
        break;
    }

    index++;
  }

  console.log(arr.join(", "));
}

arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
