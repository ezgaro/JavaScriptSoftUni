function checkSameDigitsAndSum(num) {
  let strNum = String(num);
  let firstNum = strNum[0];
  let sum = 0;
  let isTheSame = true;

  for(let i = 0; i < strNum.length ; i++) {
    if(strNum[i] != firstNum) {
      isTheSame = false;
    }
    sum += Number(strNum[i]);
  }

  console.log(isTheSame);
  console.log(sum);
}
checkSameDigitsAndSum(2222222);