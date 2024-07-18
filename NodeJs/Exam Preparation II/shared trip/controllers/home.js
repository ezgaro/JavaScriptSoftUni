const { getTrips, getTripById } = require("../services/trip");
const { tripViewModel, objectIdExtraction } = require("../util/mapper");
const { isUser } = require("../middlewares/guards");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("home", { title: "Home Page" });
});

router.get("/shared-trips", async (req, res) => {
  const trips = (await getTrips()).map(tripViewModel);
  res.render("shared-trips", { title: "Shared Trips", trips });
});

router.get("/trip-create", isUser(), (req, res) => {
  res.render("trip-create", { title: "Trip Create" });
});

router.get("/shared-trips/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const trip = tripViewModel(await getTripById(id));
    const creatorId = trip.creator._id.toString();
    req.session.hasUser = req.session.isCreator = false;
    if(req.session.user) {
      req.session.hasUser = true;
      if(req.session.user._id.toString() == creatorId) {
        req.session.isCreator = true;
      }
    }
    res.render("trip-details", { title: trip.title, ...trip, hasUser: req.session.hasUser, isCreator: req.session.isCreator });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
