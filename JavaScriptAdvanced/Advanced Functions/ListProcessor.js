function listProcessor(arr) {
  let curStr = [];
  arr.forEach((command) => {
    let [cmd, str] = command.split(" ");

    switch (cmd) {
      case "add":
        curStr.push(str);
        break;
      case "remove":
        curStr = curStr.filter((el) => el !== str);
        break;
      case "print":
        console.log(curStr.join(','));
      default:
        break;
    }
  });
}
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);
