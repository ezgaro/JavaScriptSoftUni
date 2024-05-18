function companyUsers(arr) {
    let obj = {};
    for(let el of arr) {
        let tokens = el.split(' -> ');
        let company = tokens[0];
        let empId = tokens[1];
        if(company in obj) {
            if(!obj[company].includes(empId))   obj[company].push(empId);
        } else {
            obj[company] = [empId];
        }
    }
    let sortedObj = Object.entries(obj).sort((a,b) => a[0].localeCompare(b[0]));
    for(let [companyName, empArr] of sortedObj) {
        console.log(companyName);
        for(let i = 0 ; i < empArr.length ; i++) {
            console.log('-- ' + empArr[i]);
        }
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ]);