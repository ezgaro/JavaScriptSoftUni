const { Router } = require("express");
const { body, validationResult } = require("express-validator");

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
  body("repeatPassword").custom((value, { req }) => value == req.body.password),
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
      res.locals.errors = err;
      res.render("register", { title: "Register" });
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
  } catch (error) {
    console.error(error);
    res.redirect("/login");
  }
});

router.get("/logout", (req, res) => {
  req.auth.logout();
  res.redirect("/");
});

module.exports = router;
