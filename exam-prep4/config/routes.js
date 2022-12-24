const authController = require("../controllers/authController");
const catalogController = require("../controllers/catalogController");
const homeController = require("../controllers/homeController");

module.exports = (app) => {
  app.use("/", homeController);
  app.use("/auth", authController);
  app.use('/data', catalogController)
  app.use(function(req,res){
    res.status(404);
    res.render('404');
});

};
