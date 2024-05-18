function modernTimes(str) {
    let strArr = str.split(' ');
    for(const word of strArr) {
        if(word.includes('#') && word.length > 1) {
            console.log(word.substring(1));
        }
    }
}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');