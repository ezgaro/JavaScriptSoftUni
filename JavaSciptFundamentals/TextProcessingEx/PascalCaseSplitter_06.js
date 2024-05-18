function pascalCaseSplitter(str) {
    let splittedStr = str.split(/(?=[A-Z])/);
    console.log(splittedStr.join(', '));
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');