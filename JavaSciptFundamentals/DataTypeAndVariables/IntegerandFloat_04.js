function intAndFloat(fNum , sNum , tNum) {
    let sum = fNum + sNum  +tNum;
    console.log(`${sum} - ${sum % 1 === 0 ? "Integer" : "Float"}`);
}
intAndFloat(9, 100, 1.1);