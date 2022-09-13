const http = require("http");
const { catalogPage } = require("./controllers/catalogController");
const { homePage, aboutPage } = require("./controllers/homeController");

const routes = {
  "/": homePage,
  "/about": aboutPage,
  "/catalog": catalogPage,
};

const server = http.createServer((req, res) => {
  console.log("Request received!");
  console.log(">>>", req.method, req.url);

  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log(url);

  const handler = routes[url.pathname];
  if (typeof handler == "function") {
    handler(req, res);
  } else {
    defaultPage(req, res);
  }
});

server.listen(3000);
