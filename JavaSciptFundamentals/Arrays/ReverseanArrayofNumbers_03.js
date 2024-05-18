function reverseArray(n , input) {
    let arr = [];
    for(let i = n - 1 ; i >= 0 ; i--) {
        arr.push(input[i]);
    }
    console.log(arr.join(" "))
}
reverseArray(3, [10, 20, 30, 40, 50]);