String.prototype.ensureStart = function(str){
  let cpyStr = '';
  cpyStr = this;
  if(cpyStr.startsWith(str)) {
    return cpyStr;
  } else {
    return str + cpyStr;
  }
};

String.prototype.ensureEnd = function(str){
  let cpyStr = '';
  cpyStr = this;
  if(cpyStr.endsWith(str)) {
    return cpyStr;
  } else {
    return cpyStr + str;
  }
};

String.prototype.isEmpty = function(){
  return this.length === 0;
}

String.prototype.truncate = function(n) {
  if (n < 4) {
    return '.'.repeat(n);
  }

  if (this.length <= n) {
    return this.toString();
  }

  const truncated = this.substring(0, n - 3);
  const lastSpaceIndex = truncated.lastIndexOf(' ');

  if (lastSpaceIndex != -1) {
    return truncated.substring(0, lastSpaceIndex) + '...';
  } else if (this.length > n) {
    return this.substring(0, n - 3) + '...';
  }

  return this;
};


String.format = function(str, ...params) {
  for(let i = 0; i < params.length; i++) {
    str = str.replace(`{${i}}`, params[i]);
  }
  return str;
};


let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');