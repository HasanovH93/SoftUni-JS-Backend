const express = require("express");
const path = require("path");
const initHbs = require("./config/handlebars");
const routes = require("./config/router");
const config = require("./config/config.json")[
  process.env.NODE_ENV
];
const initDatabase = require("./config/database");

const app = express();

initHbs(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "./public")));
app.use(routes);

initDatabase(config.DB_CONNECTION_STRING).then(() => {
  console.log('DB Connected')
  app.listen(
    config.PORT,
    console.log(`Server listening on port ${config.PORT}...`)
  );
})
.catch(err => {
  console.log('App init failed', err)
})
    
  
