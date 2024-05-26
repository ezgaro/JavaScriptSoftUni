function listOfNames(arr) {
  arr.sort((a,b) => a.localeCompare(b));
  arr.forEach((e, i = 0) => console.log(++i + "." + e));
}
listOfNames(["John", "Bob", "Christina", "Ema"]);