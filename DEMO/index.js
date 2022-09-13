const http = require("http");
const router = require("./router");
const {
  catalogPage,
  createPage,
  createItem,
} = require("./controllers/catalogController");
const {
  homePage,
  aboutPage,
  defaultPage,
} = require("./controllers/homeController");

router.get("/", homePage);
router.get("/about", aboutPage);
router.get("/catalog", catalogPage);
router.get("default", defaultPage);
router.get("/create", createPage);
router.get("/create", createItem);

const server = http.createServer(router.match);

server.listen(3000);
