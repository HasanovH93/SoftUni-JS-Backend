const authController = require("../controllers/auth");
const { home } = require("../controllers/home");
const hotelController = require("../controllers/hotel");
const profileController = require("../controllers/profile");
const { hasUser } = require("../middlewares/guards");

module.exports = (app) => {
   
    app.use('/', home);
    app.use('/auth', authController);
    app.use('/hotel', hasUser(), hotelController);
    app.use('/profile', profileController)

}