function oddOccurrences(sentence) {
    // Convert the sentence to lowercase and split it into words
    let words = sentence.toLowerCase().split(' ');

    // Create an object to count the occurrences of each word
    let wordCounts = {};

    // Iterate over the words
    for (let word of words) {
        // If the word is already in the object, increment its count
        // Otherwise, add it to the object with a count of 1
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }

    // Filter the words to only include those that appear an odd number of times
    let oddOccurrences = words.filter(word => wordCounts[word] % 2 !== 0);

    // Remove duplicates
    oddOccurrences = [...new Set(oddOccurrences)];

    // Join the words into a string with spaces
    console.log(oddOccurrences.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');