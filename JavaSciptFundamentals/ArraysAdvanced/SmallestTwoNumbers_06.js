function smallestTwoNumbers(arr) {
    let arr1 = arr.sort((a,b) =>  {
        return a - b;
    });
    console.log(arr1.splice(0,2).join(" "));
}
smallestTwoNumbers([30, 15, 50, 5]);