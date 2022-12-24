const authController = require("../controllers/auth");
const catalogController = require("../controllers/catalogController");
const { home } = require("../controllers/home");
const pageNotFound = require("../controllers/pageNotFound");

module.exports = (app) => {
   
    app.use('/', home);
    app.use('/auth', authController);
    app.use('/catalog',  catalogController);
    app.all("*", pageNotFound);

}