function minnerTask(arr) {
    let obj = {};

    for(let i = 0; i < arr.length ; i+=2) {
        let resource = arr[i];
        let qty = arr[i + 1];
        if(!obj.hasOwnProperty(resource)) {
            obj[resource] = Number(qty);
        } else {
            obj[resource] += Number(qty);
        }
    }
    Object.entries(obj).forEach((a) => console.log(`${a[0]} -> ${a[1]}`));
}
minnerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17',
    'Gold',
    '15'
    ]);