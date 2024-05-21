function validityChecker(x1, y1, x2, y2) {
  //Distance between (x1,y1) and (0,0)
  let x1y100 = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
  let x1y100Valid = false;
  if(Number.isInteger(x1y100)) {
    x1y100Valid = true;
  }
  if(x1y100Valid) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
  }
  //Distance between (x2,y2) and (0,0)
  let x2y200 = Math.sqrt(Math.pow(0 - x2, 2) + Math.pow(0 - y2, 2));
  let x2y200Valid = false;
  if(Number.isInteger(x2y200)) {
    x2y200Valid = true;
  }
  if(x2y200Valid) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
  }

  //Distance between (x1,y1) and (x2,y2)
  let x1y1x2y2 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  let x1y1x2y2Valid = false;
  if(Number.isInteger(x1y1x2y2)) {
    x1y1x2y2Valid = true;
  }
  if(x1y1x2y2Valid) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
  }
}
validityChecker(2, 1, 1, 1);