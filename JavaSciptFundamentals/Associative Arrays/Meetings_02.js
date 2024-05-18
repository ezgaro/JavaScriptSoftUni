function meetings(input) {
    let obj = {};

    for(const el of input) {
        let [dayOfWeek, name] = el.split(' ');
        if(!obj.hasOwnProperty(dayOfWeek)) {
            obj[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`);
        } else {
            console.log(`Conflict on ${dayOfWeek}!`);
        }
    }

    Object.entries(obj).forEach(e => console.log(`${e[0]} -> ${e[1]}`));
}
meetings(
['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']);