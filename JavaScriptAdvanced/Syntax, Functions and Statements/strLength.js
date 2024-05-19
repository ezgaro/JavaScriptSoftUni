function strLength(str1, str2, str3) {
  let sum = str1.length + str2.length + str3.length;
  let avg = Math.floor(sum / 3);
  console.log(sum);
  console.log(avg);
}


strLength("chocolate", "ice cream", "cake");