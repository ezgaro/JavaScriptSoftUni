const { getPosts } = require('../services/post');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', {title: 'Home Page' });
});

router.get('/catalog', async (req, res) => {
  const posts = await getPosts();
  res.render('catalog', {title: 'Catalog Page',posts })
})

module.exports = router