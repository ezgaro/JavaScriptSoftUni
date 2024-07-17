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
    description: trip.description,
  }
}

module.exports = {
  tripViewModel
}