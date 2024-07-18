const Trip = require('../models/Trip');


async function createTrip(trip) {
  const result = new Trip(trip);

  await result.save();
  return result;
};

async function getTrips() {
  return Trip.find({});
}

async function getTripById(id) {
  return Trip.findById(id).populate('creator', 'email _id').populate('buddies', 'email _id');
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

async function deleteTrip(id) {
  return await Trip.findByIdAndDelete(id);
}

async function joinTrip(tripId, userId) {
  const trip = await Trip.findById(tripId);
  if(!trip) {
    console.error('This trip don\'t exitst!');
    return;
  }

  if(trip.buddies.includes(userId)) {
    throw new Error("User has already voted");
  }

  trip.buddies.push(userId);
  trip.seats--;
  await trip.save();
}


module.exports = {
  createTrip,
  getTrips,
  getTripById,
  updateTrip,
  deleteTrip,
  joinTrip
}