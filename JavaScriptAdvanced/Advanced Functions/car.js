function cars(commands) {
  let cars = {};

  const methods = {
      create: (name, _, parentName) => {
          let newObj = parentName ? Object.create(cars[parentName]) : {};
          cars[name] = newObj;
      },
      set: (name, key, value) => {
          cars[name][key] = value;
      },
      print: (name) => {
          let result = [];
          for (let key in cars[name]) {
              result.push(`${key}:${cars[name][key]}`);
          }
          console.log(result.join(', '));
      }
  };

  for (let command of commands) {
      let tokens = command.split(' ');
      let action = tokens.shift();
      methods[action](...tokens);
  }
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);