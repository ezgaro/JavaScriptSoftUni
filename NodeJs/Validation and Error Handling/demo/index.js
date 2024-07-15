// [x] initialize and configure Express app
// [x] initialize templating lib
// [x] create home controller
// [x] bind routing
// [x] create layout
// create data service
// - [x] read all
// - [x] read one by Id
// - [x] create
// - [x] search
// - [x] edit
// - [x] delete
// - [ ] accessory read
// - [ ] accessory create
// - [ ] attach accessory
// implement controllers
// - [x] home (catalog)
// - [x] about
// - [x] details
// - [x] create
// - [x] improved home (search)
// - [x] edit
// - [x] delete
// - [ ] create accessory
// - [ ] attach accessory to car
// - [ ] update details to include accessory
// [x] add front-end code
// [x] add database connection
// [x] create Car model
// [x] upgrade car service to use Car model
// [x] add validation rules to Car model
// [x] create Accessory model

const express = require("express");
const hbs = require("express-handlebars");
const session = require("express-session");

const initDb = require("./models");

const carsService = require("./services/cars");
const accessoryService = require("./services/accessory");
const authService = require("./services/auth");

const { home } = require("./controllers/home");
const { about } = require("./controllers/about");
const create = require("./controllers/create");
const { details } = require("./controllers/details");
const edit = require("./controllers/edit");
const deleteCar = require("./controllers/delete");
const accessory = require("./controllers/accessory");
const attach = require("./controllers/attach");

const { body } = require("express-validator");
const {
  registerGet,
  registerPost,
  loginGet,
  loginPost,
  logout,
} = require("./controllers/auth");

const { notFound } = require("./controllers/notFound");
const { isLoggedIn } = require("./services/util");

start();

async function start() {
  await initDb();

  const app = express();

  app.engine(
    "hbs",
    hbs.create({
      extname: ".hbs",
    }).engine
  );
  app.set("view engine", "hbs");

  app.use(
    session({
      secret: "my super duper secret",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: "auto" },
    })
  );
  app.use(express.urlencoded({ extended: true }));
  app.use("/static", express.static("static"));
  app.use(carsService());
  app.use(accessoryService());
  app.use(authService());

  app.get("/", home);
  app.get("/about", about);
  app.get("/details/:id", details);

  app
    .route("/create")
    .get(isLoggedIn(), create.get)
    .post(isLoggedIn(), create.post);

  app
    .route("/delete/:id")
    .get(isLoggedIn(), deleteCar.get)
    .post(isLoggedIn(), deleteCar.post);

  app
    .route("/edit/:id")
    .get(isLoggedIn(), edit.get)
    .post(isLoggedIn(), edit.post);

  app
    .route("/accessory")
    .get(isLoggedIn(), accessory.get)
    .post(isLoggedIn(), accessory.post);

  app
    .route("/attach/:id")
    .get(isLoggedIn(), attach.get)
    .post(isLoggedIn(), attach.post);

  app
    .route("/register")
    .get(registerGet)
    .post(
      body("username", "Username is required")
        .isLength({ min: 3 })
        .withMessage("Username must be atleast 3 characters long")
        .isAlphanumeric()
        .withMessage("Username may contain only letters and numbers"),
      body("password")
        .notEmpty()
        .withMessage("Username is required")
        .isLength({ min: 6 })
        .withMessage("Password must be atleast 6 characters long"),
      body("repeatPassword").custom((value, {req}) => value == req.body.password ).withMessage('Password don/t match'),
      registerPost
    );

  app.route("/login").get(loginGet).post(loginPost);

  app.get("/logout", logout);

  app.all("*", notFound);

  app.listen(3000, () => console.log("Server started on port 3000"));
}
