const { Schema, model} = require('mongoose');

const carSchema = new Schema({
  name: String,
  price: {type: Number, default: 0, validate: {
    validator: function (value) {return value >= 0}
  },
  message: "The price has to be positive number."
},
});

carSchema.methods.startEngine = function () {
  console.log("VROOOOM!");
}

carSchema.virtual('VAT').get(function () {
  return this.price * 0.2;
});

const Car = model('Car', carSchema);

module.exports = Car;