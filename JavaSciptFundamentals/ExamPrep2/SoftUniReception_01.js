function softUniReception(arr) {
    let firstEmp = Number(arr[0]);
    let secEmp = Number(arr[1]);
    let thirdEmp = Number(arr[2]);
    let students = Number(arr[3]);

    let workForOneHour = firstEmp + secEmp + thirdEmp;

    let counterHours = 0;
    while(students > 0) {
        counterHours++;
        if(counterHours % 4 === 0) {
            counterHours++;
        }
        students -= workForOneHour;   
    }

    console.log(`Time needed: ${counterHours}h.`)
}

softUniReception(['1','2','3','45']);