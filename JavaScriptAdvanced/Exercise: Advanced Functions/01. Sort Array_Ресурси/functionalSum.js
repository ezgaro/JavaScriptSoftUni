function add(n) {
  let sum = n;
  function f(num){
    sum += num;
    return f;
  };
  f.toString = function () {
    return sum;
  }
  return f;

}
console.log(add(1)(2)(-13).toString());
