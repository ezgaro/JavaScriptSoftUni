function fillInWords(input) {
    let letter = input[0];
    let words = input[1];

    // Create a map of words by their length for quick lookup
    let wordsByLength = words.reduce((map, word) => {
        let length = word.length;
        if (!map[length]) {
            map[length] = [];
        }
        map[length].push(word);
        return map;
    }, {});

    // Replace each hole with a word of the same length
    let filledLetter = letter.replace(/_+/g, hole => {
        let length = hole.length;
        let word = wordsByLength[length] ? wordsByLength[length].shift() : hole;
        return word;
    });

    console.log(filledLetter);
}

fillInWords([
    'Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
    ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']
]);