const router = require('express').Router();


const createCube = (req, res) => {
    res.render('create')
};

router.get('/create',createCube);

module.exports = router