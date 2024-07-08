const observer = require('./observer');

function publish(index) {
  observer.emit('alert', `Publishing event. Event published ${index} times.`);
}

module.exports = publish;