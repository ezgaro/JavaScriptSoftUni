function isUser() {
  return function (req, res, next) {
    if (req.session.user) {
      next();
    } else {
      //Guard clause
      res.redirect("/login");
    }
  };
}

function isGuest() {
  return function (req, res, next) {
    if (req.session.user) {
      res.redirect("/");
    } else {
      next();
    }
  };
}


module.exports = {
  isUser,
  isGuest
}