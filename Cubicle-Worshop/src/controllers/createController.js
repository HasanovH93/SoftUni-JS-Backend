const router = require('express').Router();
const cubeService = require('../services/createServices')


const renderCreateCubePage = (req, res) => {
    let cubes = cubeService.getall()
    console.log(cubes)
    res.render('create')
};

const createCube = (req,res) => {
    
    const {name, desctiption,imageUrl,difficulty} = req.body
    cubeService.create(name, desctiption,imageUrl, difficulty)
    res.redirect('/create')
}

router.get('/create',renderCreateCubePage);
router.post('/create',createCube)

module.exports = router