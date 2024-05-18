function partyTime(arr) {
  let obj = {};
  let partyListMember = "";
  let inList = "In List";
  while (partyListMember != "PARTY") {
    partyListMember = arr.shift();
    obj[partyListMember] = inList;
  }
  //Remove PARTY
  delete obj["PARTY"];
  for (let came of arr) {
    if (obj.hasOwnProperty(came)) {
      delete obj[came];
    }
  }

  console.log(Object.keys(obj).length);
  Object.entries(obj)
    .sort((a, b) => {
      let firstStr = a[0].charAt(0);
      let secStr = b[0].charAt(0);
      return firstStr.localeCompare(secStr);
    })
    .map((m) => console.log(m[0]));
}
partyTime([
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "xys2FYzn",
  "MDzcM9ZK",
  "PARTY",
  "2FQZT3uC",
  "dziNz78I",
  "mdSGyQCJ",
  "LjcVpmDL",
  "fPXNHpm1",
  "HTTbwRmM",
  "B5yTkMQi",
  "8N0FThqG",
  "m8rfQBvl",
  "fc1oZCE0",
  "UgffRkOn",
  "7ugX7bm0",
  "9CQBGUeJ",
]);
