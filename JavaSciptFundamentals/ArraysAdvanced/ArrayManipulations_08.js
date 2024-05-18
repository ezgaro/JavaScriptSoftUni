function arrayManipulations(arr) {
    let currentArray = arr[0].split(' ').map(Number);
    for(let i = 1; i < arr.length; i++) {
        let [command, number1, number2] = arr[i].split(" ");
        number1 = Number(number1);
        number2 = Number(number2);
        switch(command) {
            case "Add" :
                currentArray.push(number1);    
                break;
            case "Remove" : 
                currentArray = currentArray.filter(num => num !== number1);
                break;
            case "RemoveAt" :
                currentArray.splice(number1, 1);
                break;
            case "Insert" :
                currentArray.splice(number2, 0, number1);
                break;
        }
    }
    console.log(currentArray.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']);