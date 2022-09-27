const router = require('express').Router()
const createController = require('../controllers/createController');
const homeController = require('../controllers/homeController');



router.use(homeController);
router.use('/cube',  createController);

module.exports = router;