function countStringOccurrences(sentance, wordToSearch) {
    let counter = 0; 
    for(const word of sentance.split(" ")) {
        if(word === wordToSearch) {
            counter++;
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence','is');