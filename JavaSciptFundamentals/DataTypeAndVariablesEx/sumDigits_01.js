function sumDigits(num) {
    let stringNum = num.toString();
    let sum = 0;

    for (let index = 0; index < stringNum.length; index++) {
        const digit = Number(stringNum[index]);
        sum+= digit;
    }
    console.log(sum);
}

sumDigits(11);