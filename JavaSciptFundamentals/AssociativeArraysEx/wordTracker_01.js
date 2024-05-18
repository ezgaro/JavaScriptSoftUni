function wordTarcker(arr) {
    let searchedWords = arr.shift();
    let obj = {};
    let wordsArr = searchedWords.split(' ');
    while(wordsArr.length > 0) {
        let currWord = wordsArr.shift();
        for(let word of arr) {
            if(word === currWord) {
                if(currWord in obj) {
                    obj[currWord] += 1;
                } else {
                    obj[currWord] = 1;
                }
            }
        }
    }

    Object.entries(obj).sort((a,b) => b[1] - a[1])
    .forEach(e => console.log(`${e[0]} - ${e[1]}`));
}
wordTarcker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
    ]);