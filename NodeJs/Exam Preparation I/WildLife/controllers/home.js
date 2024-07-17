const { isUser } = require('../middleware/guards');
const { getPosts, getPostById, getPostsByAuthor } = require('../services/post');
const { postViewModel } = require('../util/mappers');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('home', {title: 'Home Page' });
});

router.get('/catalog', async (req, res) => {
  const posts = (await getPosts()).map(postViewModel);
  res.render('catalog', {title: 'Catalog Page',posts })
});
router.get('/catalog/logout', isUser(), (req, res) => {
  delete req.session.user;
  res.redirect('/');
})

router.get('/catalog/:id', async (req, res) => {
  const id = req.params.id;
  const post = postViewModel(await getPostById(id));
  if(req.session.user) {
    post.hasUser = true;
    if(req.session.user._id == post.author._id) {
      post.isAuthor = true;
    } else {
      post.hasVoted = post.votes.find(v => v._id == req.session.user._id) != undefined;
      // post.hasVoted = post.votes.find(v => v._id.toString() == req.session.user._id.toString()) != undefined;
    }
  }
  res.render('details', {title: post.title, post})
});

router.get('/profile', isUser(), async (req, res) => {
  const posts = (await getPostsByAuthor(req.session.user._id)).map(postViewModel);
  res.render('profile', {title: 'My Posts', posts});
});

module.exports = router;