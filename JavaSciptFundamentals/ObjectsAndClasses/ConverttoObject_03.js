function converttoObject(input) {
    let obj = JSON.parse(input);
    for(let el of Object.entries(obj)) {
        console.log(el[0] + ": " + el[1]);
    }
}
converttoObject('{"name": "George", "age": 40, "town": "Sofia"}');