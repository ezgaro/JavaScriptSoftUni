function stringSubstring(word, sentance) {
    if(sentance.length > 0 && word.length > 0) {
        sentance = sentance.toLowerCase();
        word = word.toLowerCase();
    }
    if(sentance.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}
stringSubstring('javascript','JavaScript is the best programming language');