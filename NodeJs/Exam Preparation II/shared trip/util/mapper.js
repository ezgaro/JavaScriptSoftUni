function tripViewModel(trip) {
  const bud = trip.buddies;
  return {
    _id: trip.id,
    startPoint: trip.startPoint,
    endPoint: trip.endPoint,
    date: trip.date,
    time: trip.time,
    carImage: trip.carImage,
    carBrand: trip.carBrand,
    seats: trip.seats,
    price: trip.price,
    creator: creatorViewModel(trip.creator),
    description: trip.description,
    buddies: bud.map(tripBuddiesViewModel),
  };
}

function userViewModel(user) {
  const tripHis = user.tripHistory;
  return {
    _id: user.id,
    email: user.email,
    gender: user.gender,
    tripHistory: tripHis.map(tripHistoryViewModel)
  }
}

function tripHistoryViewModel(trip) {
  return {
    _id: trip._id
  }
}

function tripBuddiesViewModel(user) {
  return {
    _id: user._id
  }
}

function creatorViewModel(user) {
  return {
    _id: user._id,
    email: user.email,
  };
}

module.exports = {
  tripViewModel,
  userViewModel
};
