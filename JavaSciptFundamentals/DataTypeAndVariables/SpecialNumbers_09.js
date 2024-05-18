function isSpecial(n) {
    for(let i = 1 ; i <= n ; i++) {
        let sum = 0;
        let number = i;
        while(number != 0) {
            let temp = parseInt(number % 10);
            sum+=temp;
            number = parseInt(number / 10);
        }
        if(sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
isSpecial(25);