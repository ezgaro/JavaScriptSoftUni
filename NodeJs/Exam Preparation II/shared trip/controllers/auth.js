const { register, login } = require("../services/user");

const router = require("express").Router();

router.get("/register", (req, res) => {
  res.render("register", { title: "Register Page" });
});

router.post("/register", async (req, res) => {
  try {
    if (req.body.password.trim() == "") {
      throw new Error("Password is required!");
    } else if (req.body.password != req.body.repass) {
      throw new Error("Passwords don't match");
    }
    console.log(req.body);
    const user = await register(
      req.body.email,
      req.body.password,
      req.body.repass,
      req.body.gender
    );
    req.session.user = user;
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Login Page" });
});

router.post("/login", async (req, res) => {
  try {
    const user = await login(req.body.email, req.body.password);
    req.session.user = user;
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
});



module.exports = router;
