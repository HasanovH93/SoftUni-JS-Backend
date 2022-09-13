const http = require("http");
const router = require("./router");
const { catalogPage, createPage } = require("./controllers/catalogController");
const {
  homePage,
  aboutPage,
  defaultPage,
} = require("./controllers/homeController");

router.register("/", homePage);
router.register("/about", aboutPage);
router.register("/catalog", catalogPage);
router.register("default", defaultPage);
router.register('/create',createPage)

const server = http.createServer(router.match);

server.listen(3000);
