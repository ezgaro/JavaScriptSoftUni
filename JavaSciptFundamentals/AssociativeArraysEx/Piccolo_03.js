function piccolo(cars) {
    let obj = {};
    let count = 0;
    for(let token of cars) {
        let command = token.split(', ')[0];
        let carId = token.split(', ')[1];
        if(command === 'IN') {
            obj[carId] = command;
            count++;
        } else if(command === 'OUT') {
            obj[carId] = command;
            count--;
        }
    }
    if(count === 0) {
        console.log("Parking Lot is Empty");
        return;
    }
    let filteredObj = Object.entries(obj).filter(e => e[1] === 'IN')
    .map(a => a = a[0])
    .sort((a,b) => {
        let numA = Number(a.slice(2,6));
        let numB = Number(b.slice(2,6));
        return numA - numB;
    }).forEach(car => console.log(car));
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);