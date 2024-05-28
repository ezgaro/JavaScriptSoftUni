function townstoJSON(arr) {
  let res = [];
  for(let i = 1; i < arr.length; i++) {
    let [_, townName, latitude, longitude ] = arr[i].split("|");
    let obj = {
      "Town": townName.trim(),
      "Latitude": latitude.trim(),
      "Longitude": longitude.trim()
    };
    res.push(obj);
  }
  console.log(JSON.stringify(res));
}

townstoJSON(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']
);