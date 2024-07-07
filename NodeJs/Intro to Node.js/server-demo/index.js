const http = require("http");

const router = require("./router");
const { homeController } = require("./controllers/homeController");
const { aboutController } = require("./controllers/aboutController");
const { catalogController, deleteController } = require("./controllers/catalogController");
const { createController } = require("./controllers/catalogController");

const server = http.createServer(router.main);
router.get("/", homeController);
router.get("/about", aboutController);
router.get("/catalog", catalogController);
router.post("/catalog", createController);
router.post("/catalog", deleteController);

server.listen(3000);
