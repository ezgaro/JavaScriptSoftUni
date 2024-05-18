function converttoJSON(firstName, lastName, hairColor) {
    let obj = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }

    console.log(JSON.stringify(obj));
}
converttoJSON('George', 'Jones','Brown');