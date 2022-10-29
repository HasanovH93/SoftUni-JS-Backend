const { getLastTree } = require('../services/adService');

const homeController = require('express').Router();



homeController.get('/', async (req, res) => {
    const data = await getLastTree();
  
    res.render('home', {
        title:'Home Page',
        data
    })
});

module.exports = homeController;