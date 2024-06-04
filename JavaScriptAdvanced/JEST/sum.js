function fetchPromise() {
  return new Promise((resolve, rject) => {
    setTimeout(() => {
      resolve('peanut butter');
    }, 1000);
  })
};
module.exports = fetchPromise;