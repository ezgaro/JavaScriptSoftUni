const Trip = require('../models/Trip');


async function createTrip(trip) {
  const result = await new Trip(trip);
  await result.save();
  return result;
};

async function getTrips() {
  return Trip.find({});
}

async function getTripById(id) {
  return Trip.findById(id).populate('creator', 'email _id');
}

async function updateTrip(id, newTrip) {
  const existing = await Trip.findById(id);
  existing.startPoint= newTrip.startPoint,
  existing.endPoint= newTrip.endPoint,
  existing.date= newTrip.date,
  existing.time= newTrip.time,
  existing.carImage= newTrip.carImage,
  existing.carBrand= newTrip.carBrand,
  existing.seats= newTrip.seats,
  existing.price= newTrip.price,
  existing.description= newTrip.description,

  await existing.save();
}



module.exports = {
  createTrip,
  getTrips,
  getTripById,
  updateTrip
}