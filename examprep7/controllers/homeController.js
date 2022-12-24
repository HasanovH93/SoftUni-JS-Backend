const { getLastTree } = require('../services/blogService');

const homeController = require('express').Router();


//TODO replace with real controller by assignment

homeController.get('/', async (req, res) => {
    const data = await getLastTree();
    res.render('home', {
        title:'Home Page',
        data
    })
});

module.exports = homeController;