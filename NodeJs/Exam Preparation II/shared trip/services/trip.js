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



module.exports = {
  createTrip,
  getTrips,
  getTripById
}