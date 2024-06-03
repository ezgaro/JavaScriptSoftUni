function argumentInfo(...args) {
  let obj = {};
  for(let el of args) {
    if(obj[typeof el]) {
      obj[typeof el]++;
    } else {
      obj[typeof el] = 1;
    }
    console.log(typeof el + ': '+ el);
  }
  Object.keys(obj).forEach(k => console.log(k + " = " + obj[k]));
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });