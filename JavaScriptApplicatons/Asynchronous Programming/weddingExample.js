let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    if(Math.random() > 0.5) {
      resolve("Wedding");
    } else {
      reject("No wedding");
    }
  }, 3000);
});

promise.then(result => console.log(result));
promise.catch(rej => console.log(rej));