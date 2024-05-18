function searchforaNumber(arrToManipulate, arrToUse) {
    let elsToTake = arrToUse[0];
    let elsToDelete = arrToUse[1];
    let elTAoSearchFor = arrToUse[2];

    let arr = arrToManipulate.slice(elsToDelete - 1, elsToTake);
    let counter = 0;
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] === elTAoSearchFor) {
            counter++;
        }
    }

    console.log(`Number ${elTAoSearchFor} occurs ${counter} times.`)

}

searchforaNumber([7, 1, 5, 8, 2, 7],[3, 1, 5]);