const { getTrips, getTripById } = require("../services/trip");
const {
  tripViewModel,
  seatsFixer,
  objectIdToEmail,
} = require("../util/mapper");
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


router.get("/shared-trips/:id", isUser(), async (req, res) => {
  try {
    let seatsOverZero;
    const id = req.params.id;
    const trip = tripViewModel(await getTripById(id));

    const creatorId = trip.creator._id.toString();
    req.session.hasUser = req.session.isCreator = false;
    seatsFixer(trip.seats, seatsOverZero);

    if (req.session.user) {
      const userId = req.session.user._id;
      req.session.hasUser = true;
      if (userId.toString() === creatorId) {
        req.session.isCreator = true;
      } else {
        trip.isBuddy = Boolean(
          trip.buddies.find((b) => b._id.toString() === userId.toString())
        );
      }
    }

    objectIdToEmail(trip.buddies)
      .then((emails) => {
        const email = emails.join(', ');
        res.render("trip-details", {
          title: "Details",
          ...trip,
          hasUser: req.session.hasUser,
          isCreator: req.session.isCreator,
          seatsOverZero,
          email,
        });
      })
      .catch((error) => {
        console.error("Error fetching emails:", error);
        res.status(500).send("Error fetching emails");
      });

  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});


module.exports = router;
