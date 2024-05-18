function manageTrain(arr) {
    let wagons = arr[0].split(' ').map(Number);
    let maxCapacity = Number(arr[1]);

    for (let i = 2; i < arr.length; i++) {
        let command = arr[i].split(' ');

        if (command[0] === 'Add') {
            wagons.push(Number(command[1]));
        } else {
            let passengers = Number(command[0]);

            for (let j = 0; j < wagons.length; j++) {
                if (wagons[j] + passengers <= maxCapacity) {
                    wagons[j] += passengers;
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}

manageTrain(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);