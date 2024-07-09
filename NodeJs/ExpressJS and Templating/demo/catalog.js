const {Router} = require('express');

const router = Router();


router.get('/', (req, res) => {
  res.send("Hello Catalog");
});

router.get('/:productId', (req, res) => {
  console.log(req.params);
  res.send("Product");
});

router.get('/details/:productId', (req, res) => {
  res.send("Details");
});

router.get('/edit/:productId', (req, res) => {
  res.send("Edit");
});

module.exports = router;