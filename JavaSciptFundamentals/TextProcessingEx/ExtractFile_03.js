function extractFile(str) {
    let wordsOfPathArr = str.split('\\');
    let fileName = wordsOfPathArr[wordsOfPathArr.length - 1];
    let dotLast = fileName.lastIndexOf('.');
    let output = fileName.substring(0, dotLast);
    let extension = fileName.substring(dotLast + 1);
    console.log(`File name: ${output}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');