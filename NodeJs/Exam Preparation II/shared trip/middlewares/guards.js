function isGuest() {
  return function (req, res, next) {
    if (req.session.user) {
      res.redirect("/");
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
      res.redirect("/login");
    }
  };
}


module.exports = {
  isGuest,
  isUser
}