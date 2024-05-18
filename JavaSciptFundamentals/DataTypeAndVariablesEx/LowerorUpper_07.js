function lowerorUpper(currChar) {
    if (currChar === currChar.toUpperCase()) {
        console.log('upper-case');
    } else if (currChar === currChar.toLowerCase()) {
        console.log('lower-case');
    } else {
        console.log('The character is not a letter');
    }
}

lowerorUpper('l');