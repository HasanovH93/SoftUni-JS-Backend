const express = require("express");
const path = require("path");
const initHbs = require("./config/handlebars");
const routes = require("./config/router");
const config = require("./config/config.json")[process.env.NODE_ENV || 'development']

const app = express();

initHbs(app);
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(routes);

app.listen(3000, () => {
  config.PORT,
  console.log( `Server listening on port ${config.PORT}...`);
});
