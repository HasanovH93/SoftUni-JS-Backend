const router = require('express').Router();
const cubeService = require('../services/createServices')


const home = (req, res) => {
   let cubes =  cubeService.getall()
    res.render('index', {
        cubes
    })
};

router.get('/', home);

module.exports = router