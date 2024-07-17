const { createTrip } = require("../services/trip");

const router = require("express").Router();

router.post("/trip-create", async (req, res) => {
  const trip = {
    startPoint: req.body.startPoint,
    endPoint: req.body.endPoint,
    date: req.body.date,
    time: req.body.time,
    carImage: req.body.carImage,
    carBrand: req.body.carBrand,
    seats: req.body.seats,
    price: req.body.price,
    description: req.body.description,
  };

  try {
    await createTrip(trip);
    res.redirect('/shared-trips')
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
