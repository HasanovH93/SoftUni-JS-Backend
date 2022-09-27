const router = require('express').Router()
const createController = require('../controllers/createController');
const homeController = require('../controllers/homeController');



router.use(homeController);
router.use(createController);
router.use('*', (req, res) => {
    res.render('404')
})

module.exports = router;