function amazingNumbers(num) {
    let sum = 0;
    num = num.toString();
    for(let i = 0 ; i < num.length; i++) {
        sum+=Number(num[i]);
    }
    let result = sum.toString().includes("9");
    result ?
    console.log(`${num} Amazing? True`)
    :
    console.log(`${num} Amazing? False`);

}
amazingNumbers(1233);