function tripViewModel(trip) {
   return  {
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
  }
};

function creatorViewModel(user) {
  return {
    _id: user._id,
  }
}

module.exports = {
  tripViewModel
}