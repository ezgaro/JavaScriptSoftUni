function palindromeIntegers(arr) {
    for(num of arr) {
        let reversedNum =num.toString().split("").reverse().join("");
        if(reversedNum == num) {
            console.log("true");
        } else {
            console.log("false");
        }
        
    }
}

palindromeIntegers([123,333,421,121]);