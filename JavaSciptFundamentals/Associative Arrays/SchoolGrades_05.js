function schoolGrades(input) {
    let obj = {};

    for(let student of input) {
        let grades = student.split(' ');
        let name = grades.shift();
        if(obj.hasOwnProperty(name)) {
            obj[name] =obj[name] + `,${grades}`;
        } else {
            obj[name] = `${grades}`;
        }
    }

    for(let el in obj) {
        let grades = obj[el].split(",");
        let avg = 0;
        let sum = 0;
        for(let grade of grades) {
            sum += Number(grade);
        }
        avg = (sum / grades.length).toFixed(2);
        obj[el] = avg;
    }
    //Sort alphabetically
    Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(entry => console.log(`${entry[0]}: ${entry[1]}`));
}
schoolGrades(
['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']);