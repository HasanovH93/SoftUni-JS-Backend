const express = require("express");
const path = require("path");
const initHbs = require("./config/handlebars");
const routes = require("./config/router");

const app = express();

initHbs(app);
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(routes);

app.listen(3000, () => {
  console.log("Server listening on port 3000....");
});
