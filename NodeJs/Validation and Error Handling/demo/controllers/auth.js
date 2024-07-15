const { Router } = require("express");
const { body, validationResult } = require("express-validator");
const { mapError } = require("../services/util");

const router = Router();

router.get("/register", (req, res) => {
  res.render("register", { title: "Register" });
});

router.post(
  "/register",
  body("username").trim(),
  body("password").trim(),
  body("repeatPassword").trim(),
  body("username")
    .isLength({ min: 5 })
    .withMessage("Username must be atleast 5 charackters long.")
    .isAlphanumeric()
    .withMessage("Username may be only alphanumeric characters."),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be atleast 8 charackters long.")
    .isAlphanumeric()
    .withMessage("Password may be only alphanumeric characters."),
  body("repeatPassword")
    .custom((value, { req }) => value == req.body.password)
    .withMessage("Passwords don't match"),
  async (req, res) => {
    const { errors } = validationResult(req);
    try {
      if (errors.length > 0) {
        throw errors;
      }
      await req.auth.register(req.body.username, req.body.password);
      res.redirect("/");
    } catch (err) {
      console.error(err.message);
      res.locals.errors = mapError(err);
      res.render("register", {
        title: "Register",
        data: { username: req.body.username },
      });
    }
  }
);

router.get("/login", (req, res) => {
  res.render("login", { title: "Login" });
});

router.post("/login", async (req, res) => {
  try {
    await req.auth.login(req.body.username, req.body.password);
    res.redirect("/");
  } catch (err) {
    res.locals.errors = [{msg: err.message} ];
    console.error(err);
    res.render("login", { title: "Login" });
  }
});

router.get("/logout", (req, res) => {
  req.auth.logout();
  res.redirect("/");
});

module.exports = router;
