function sortanArrayby2Criteria(arr) {
  arr.map(e => e.toLowerCase());
  arr.sort((a, b) => a.localeCompare(b));
  arr.sort((a, b) => a.length - b.length);
  arr.forEach(element => console.log(element));
}
sortanArrayby2Criteria(['Isacc',
'Theodor',
'Jack',
'Harrison',
'George']
);