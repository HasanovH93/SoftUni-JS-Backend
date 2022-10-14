const express = require('express')
const createController = require('../controllers/createController');
const homeController = require('../controllers/homeController');
const accessoryController = require('../controllers/accessoaryController')
const router = express.Router()



router.use(homeController);
router.use('/cube',createController);
router.use('/accessory',accessoryController)
router.use('*', (req, res) => {
    res.render('404')
})

module.exports = router;