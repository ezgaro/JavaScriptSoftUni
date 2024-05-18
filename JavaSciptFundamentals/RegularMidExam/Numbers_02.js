function Numbers(input) {
    let index = 0;
    let arr = input[index].split(" ").map(Number);
    index++;
    let nextCommand = input[index];
    while(nextCommand !== "Finish") {
        let commandArr = input[index].split(" ");
        let command = commandArr[0];
        let value = +commandArr[1];
        if(command === "Add") {
            arr.push(value);
        } else if(command === "Remove") {
            for(let el of arr) {
                if(el === value) {
                    let idx = arr.indexOf(el);
                    arr.splice(idx, 1);
                    break;
                }
            }
        } else if(command === "Replace") {
            let replacement = +commandArr[2];
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] === value) {
                    arr[i] = replacement;
                    break;
                }
            }
        } else if(command === "Collapse") {
            arr = arr.filter(el => el >= value);
        }
        index++;
        nextCommand = input[index];
    }

    console.log(arr.join(" "));
}

Numbers(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);