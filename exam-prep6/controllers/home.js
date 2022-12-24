//TODO replace with real control by assignment

const { getAll } = require('../services/hotel');

const home = require('express').Router();

home.get('/', async (req, res) => {
    const hotels = await getAll();
    res.render('home', {
        title: 'Home Page',
        hotels
    })
});



module.exports = {
    home
}