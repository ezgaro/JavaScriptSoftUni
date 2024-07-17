const Trip = require('../models/Trip');


async function createTrip(trip) {
  const result = await new Trip(trip);
  await result.save();
  return result;
};

async function getTrips() {
  return Trip.find({});
}


module.exports = {
  createTrip,
  getTrips
}