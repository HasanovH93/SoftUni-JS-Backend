const router = require('express').Router();
const cubeService = require('../services/createServices');
const searchService = require('../services/searchService')


const home = (req, res) => {
   let cubes =  cubeService.getall()
    res.render('index', {
        cubes
    })
};

const about = (req, res) => {
    res.render('about')
}

const search = (req, res) => {
    let { search, from, to } = req.query;
    
    const cubes = searchService.search(search,from,to);

 
    res.render('index', {
        title: 'SEARCH',
        search,
        from,
        to,
        cubes,
    })
    console.log(req.query)
    
}

router.get('/', home);
router.get('/about',about);
router.get('/search',search)

module.exports = router