const express = require("express");
const hbr = require("express-handlebars");
const homeController = require("./controllers/homeController");
const addBreedsController = require('./controllers/addBreedController')
const addCatController = require('./controllers/addCatController')
const upload = require('express-fileupload')

const handlebars = hbr.create({
  extname: ".hbs",
});

const app = express();

app.engine(".hbs", handlebars.engine);
app.set("view engine", ".hbs");

app.use(upload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use(express.urlencoded({ extended:true }));
app.use("/static", express.static("static"));

app.use(homeController);
app.use(addBreedsController)
app.use(addCatController)

app.listen(5000, () => {
  console.log("Server is running on port 5000...");
});
