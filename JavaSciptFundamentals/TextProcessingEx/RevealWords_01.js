function revealWords(missingWords, sentance) {
    let missArr = missingWords.split(', ');
    let replacedStr = '';
    for(const missing of missArr) {
        let starsInSentance = '*'.repeat(missing.length);
        if(sentance.includes(starsInSentance)) {
            replacedStr = sentance.replace(starsInSentance, missing);
            sentance = replacedStr;
        }

    }
    console.log(replacedStr);
}
revealWords(
'great, learning',
 'softuni is ***** place for ******** new programming languages');