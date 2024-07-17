const { Schema, model, Types: {ObjectId}} = require('mongoose');


const tripSchema = new Schema({
  startPoint: {type: String,  required: [true, 'The Start Point field have to be filled']},
  endPoint : {type: String ,required: [true, 'The End Point field have to be filled']},
  date :  {type: String ,required: [true, 'The Date field have to be filled']},
  time :  {type: String ,required: [true, 'The Time field have to be filled']},
  carImage :  {type: String ,required: [true, 'The Car Image field have to be filled']},
  carBrand :  {type: String ,required: [true, 'The Car Brand field have to be filled']},
  seats :  {type: Number ,required: [true, 'The Seats field have to be filled']},
  price :  {type: Number ,required: [true, 'The Price field have to be filled']},
  description :  {type: String ,required: [true, 'The Description field have to be filled']},
  creator : {type: ObjectId, ref: "User"},
  buddies : { type: [ObjectId], ref: "User" , default: []} //When a user joined the given trip, a reference to that user is added to that collection (Buddies).
});

const Trip = model('Trip', tripSchema);

module.exports = Trip;