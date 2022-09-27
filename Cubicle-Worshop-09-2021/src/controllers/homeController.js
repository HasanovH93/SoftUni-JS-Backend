const router = require('express').Router();


const home = (req, res) => {
    res.render('index')
};

router.get('/index', home);

module.exports = router