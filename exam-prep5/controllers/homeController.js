const { getLastTree } = require('../services/adService');

const homeController = require('express').Router();



homeController.get('/', async (req, res) => {
    const data = await getLastTree();
    data.map(p => p.candidates = p.applied.length)
    res.render('home', {
        title:'Home Page',
        data
    })
});

module.exports = homeController;