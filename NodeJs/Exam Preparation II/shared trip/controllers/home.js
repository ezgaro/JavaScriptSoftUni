const { getTrips } = require('../services/trip');
const { tripViewModel } = require('../util/mapper');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', {title: 'Home Page'});
});

router.get('/shared-trips', async (req, res) => {
  const trips = (await getTrips()).map(tripViewModel);
  res.render('shared-trips', {title: 'Shared Trips', trips});
});

router.get('/trip-create', (req, res) => {
  res.render('trip-create', {title: 'Trip Create'});
});

module.exports = router;