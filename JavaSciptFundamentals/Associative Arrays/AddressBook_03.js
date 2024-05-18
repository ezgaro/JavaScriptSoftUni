function addressBook(input) {
    let obj = {};

    for(let el of input) {
        let [name, address] = el.split(":");
        obj[name] = address;
    }
    Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}
addressBook([
  "Tim:Doe Crossing",
  "Bill:Nelson Place",
  "Peter:Carlyle Ave",
  "Bill:Ornery Rd",
]);
