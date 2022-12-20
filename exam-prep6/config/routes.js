const authController = require("../controllers/auth");
const { home } = require("../controllers/home");
const hotelController = require("../controllers/hotel");
const profileController = require("../controllers/profile");

module.exports = (app) => {
   
    app.use('/', home);
    app.use('/auth', authController);
    app.use('/hotel', hotelController);
    app.use('/profile', profileController)

}