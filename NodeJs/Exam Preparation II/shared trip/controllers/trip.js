const { isUser } = require("../middlewares/guards");
const { createTrip, getTripById, updateTrip, deleteTrip, joinTrip } = require("../services/trip");
const { pushTripToTripHistory } = require("../services/user");
const { tripViewModel } = require("../util/mapper");

const router = require("express").Router();

router.post("/trip-create", isUser(), async (req, res) => {
  const userId = req.session.user._id;
  const trip = {
    startPoint: req.body.startPoint,
    endPoint: req.body.endPoint,
    date: req.body.date,
    time: req.body.time,
    carImage: req.body.carImage,
    carBrand: req.body.carBrand,
    seats: req.body.seats,
    price: req.body.price,
    creator: userId,
    description: req.body.description,
  };

  try {
    const savedTrip = await createTrip(trip);
    await pushTripToTripHistory(req.session.user._id, savedTrip);
    res.redirect("/shared-trips");
  } catch (error) {
    console.error(error);
  }
});

router.get("/edit/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const trip = tripViewModel(await getTripById(id));

  if (req.session.user._id.toString() != trip.creator._id.toString()) {
    return res.redirect("/login");
  }

  res.render("trip-edit", { title: "Edit Page", trip });
});

router.post("/edit/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = tripViewModel(await getTripById(id));

  if (req.session.user._id.toString() != existing.creator._id.toString()) {
    return res.redirect("/login");
  }

  const editedTrip = {
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
    await updateTrip(id, editedTrip);

    res.redirect("/shared-trips/" + id);
  } catch (error) {
    console.error("Error in updating the trip");
    console.log(error);
    res.render("trip-edit", { title: "Edit Page", editedTrip });
  }
});

router.get('/delete/:id', isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = tripViewModel(await getTripById(id));

  if (req.session.user._id.toString() != existing.creator._id.toString()) {
    return res.redirect("/login");
  }

  try {
    await deleteTrip(id);
    res.redirect('/shared-trips');
  } catch (error) {
    console.error(error);
    res.render("trip-edit", { title: "Edit Page", existing });
  }
});


router.get('/join/:id', isUser(),async (req, res) => {
  const tripId = req.params.id;
  try {
    await joinTrip(tripId, req.session.user._id);
    res.redirect('/shared-trips/' + tripId);
  } catch (error) {
    console.error(error);
    res.render('trip-details', {title: 'Deatails Page'});
  }
})

module.exports = router;
