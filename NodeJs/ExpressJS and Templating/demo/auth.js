function isAdmin(req, res, next) {
  if(req.headers['x-admin']) {
    next();
  } else {
    res.status(401).send("Please Login");
  }
};


module.exports = {
  isAdmin
}