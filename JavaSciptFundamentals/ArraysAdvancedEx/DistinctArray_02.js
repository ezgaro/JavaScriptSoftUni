function distinctArray(arr) {
    let result = [];

    for(let i = 0; i < arr.length ; i++) {
        if(result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }

    console.log(result.join(" "));
}

distinctArray([1, 2, 3, 4]);