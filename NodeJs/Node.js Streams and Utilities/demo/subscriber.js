const observer = require('./observer');

function subscribe() {
  observer.on('alert', (data) => {
    console.log('Event recieved');
    console.log(data);
  })
};

subscribe();