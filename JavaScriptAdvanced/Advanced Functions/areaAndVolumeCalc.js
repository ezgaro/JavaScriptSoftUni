function area() {
  return Math.abs(this.x * this.y);
}

function vol() {
  return Math.abs(this.x * this.y * this.z);
}

function solve(area, vol, input) {
  let coordinates = JSON.parse(input);
  let resultArr = [];
  while(coordinates.length > 0) {
    let curObj = coordinates.shift();
    let objRes = {};
    let curArea = area.bind(curObj);
    let curVol = vol.bind(curObj);

    objRes.area = curArea();
    objRes.vol = curVol();
    resultArr.push(objRes);
  }
  console.log(resultArr);
}

solve(
  area,
  vol,
  `[
  {"x":"1","y":"2","z":"10"},
  {"x":"7","y":"7","z":"10"},
  {"x":"5","y":"2","z":"10"}
  ]`
);
