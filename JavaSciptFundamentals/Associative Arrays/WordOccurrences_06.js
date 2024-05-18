function wordOccurrences(input) {
    let obj = {};
    for(let el of input) {
        if(!obj.hasOwnProperty(el)) {
            obj[el] = 1;
        } else {
            obj[el] += 1;
        }
    }
    Object.entries(obj).sort((a,b) => b[1] - a[1])
    .forEach((e) => console.log(`${e[0]} -> ${e[1]} times`));
}
wordOccurrences([
"Here", "is", "the", "first", "sentence",
"Here", "is", "another", "sentence", "And",
"finally", "the", "third", "sentence"]);