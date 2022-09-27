const router = require('express').Router();
const cubeService = require('../services/createServices')


const home = (req, res) => {
   let cubes =  cubeService.getall()
    res.render('index', {
        cubes
    })
};

const about = (req, res) => {
    res.render('about')
}

router.get('/', home);
router.get('/about',about)

module.exports = router