function isGuest() {
  return function (req, res, next) {
    if (req.session.user) {
      res.render("/");
    } else {
      next();
    }
  };
}

function isUser() {
  return function (req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.render("/login");
    }
  };
}


module.exports = {
  isGuest,
  isUser
}