function extensibleObject() {
  let obj = {
      extend: function(template) {
          for (let prop in template) {
              if (template.hasOwnProperty(prop)) {
                  if (typeof template[prop] === 'function') {
                      Object.getPrototypeOf(obj)[prop] = template[prop];
                  } else {
                      obj[prop] = template[prop];
                  }
              }
          }
      }
  };
  return obj;
}

// Example usage:
const myObj = extensibleObject();
const template = {
  extensionMethod: function () {},
  extensionProperty: 'someString'
};
myObj.extend(template);