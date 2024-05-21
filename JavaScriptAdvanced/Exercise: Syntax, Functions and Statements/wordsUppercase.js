function wordsUppercase(str) {
  let words = str.match(/\b\w+\b/g);
  let upperCaseWords = words.map(word => word.toUpperCase());
  console.log(upperCaseWords.join(', '));
}
wordsUppercase('Hi, how are you?');