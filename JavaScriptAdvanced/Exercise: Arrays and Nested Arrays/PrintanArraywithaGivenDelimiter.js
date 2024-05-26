function printanArraywithaGivenDelimiter(arr, delimiter) {
  let result = "";
  for(let el of arr) {
    result += el + delimiter;
  }
  console.log(result.slice(0, result.length - 1));
}
printanArraywithaGivenDelimiter(['One',
'Two',
'Three',
'Four',
'Five'],
'-');