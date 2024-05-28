function rectangle(width, height, color) {
  return obj = {
    width,
    height,
    color: color.substring(0,1).toUpperCase() + color.substring(1),
    calcArea: () => width * height
  };
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width); // 4
console.log(rect.height); // 5
console.log(rect.color); // Red
console.log(rect.calcArea()); // 20
