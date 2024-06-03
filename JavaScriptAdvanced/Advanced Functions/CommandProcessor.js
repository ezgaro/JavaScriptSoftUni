function solution() {
  let curStr = "";
  return {
    append(str) {
      curStr += str;
    },
    removeStart(n) {
      curStr = curStr.substring(n);
    },
    removeEnd(n) {
      curStr = curStr.substring(0, curStr.length - n);
    },
    print() {
      console.log(curStr);
    }
  };
}

let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();