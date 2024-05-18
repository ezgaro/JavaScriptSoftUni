function cutandReverse(str) {
    console.log(str.substring(0, str.length / 2).split('').reverse().join(''));
    console.log(str.substring(str.length / 2).split('').reverse().join(''));
}
cutandReverse('tluciffiDsIsihTgnizamAoSsIsihT');