const http = require("http");
const router = require('./router')
const { catalogPage } = require("./controllers/catalogController");
const { homePage, aboutPage ,defaultPage} = require("./controllers/homeController");

router.register('/',homePage)
router.register('/about',aboutPage)
router.register('/catalog',catalogPage)
router.register('default',defaultPage)


const server = http.createServer((req, res) => {
  console.log(">>>", req.method, req.url);

  router.match(req,res)

  });

server.listen(3000);
