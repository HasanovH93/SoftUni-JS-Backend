//TODO replace with real control by assignment

const home = require('express').Router();

home.get('/', (req, res) => {
    res.render('home', {
        title: 'Home Page',
        user: req.user
    })
})

module.exports = {
    home
}