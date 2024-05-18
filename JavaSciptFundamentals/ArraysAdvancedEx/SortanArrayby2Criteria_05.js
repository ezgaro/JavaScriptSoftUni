function sortanArrayby2Criteria(arr) {
    let sortedArr = arr.sort((a,b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join("\n"));
}
sortanArrayby2Criteria(['alpha','beta','gamma']);