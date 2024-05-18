function firstandLastKNumbers(arr) {
    let k = arr[0];
    let firstOutput = arr.slice(1 , (1 + k));
    console.log(String(firstOutput.join(" ")));
    let secondOutput = arr.slice(arr.length - k);
    console.log(String(secondOutput.join(" ")));
}
firstandLastKNumbers([2, 7, 8, 9]);
firstandLastKNumbers([3, 6, 7, 8, 9]);