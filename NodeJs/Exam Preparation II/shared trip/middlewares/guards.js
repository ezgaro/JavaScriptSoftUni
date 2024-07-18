function isGuest() {
  return function (req, res, next) {
    if (req.session.user && req.session) {
      res.redirect("/");
    } else {
      next();
    }
  };
}

function isUser() {
  return function (req, res, next) {
    if (req.session.user && req.session) {
      next();
    } else {
      res.redirect("/login");
    }
  };
}


module.exports = {
  isGuest,
  isUser
}