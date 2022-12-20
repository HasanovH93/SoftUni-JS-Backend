const hotelController = require('express').Router();

hotelController.get('/:id/details', (req, res) => {
    res.render('details', {
        title: 'Hotel details'
    })
});


hotelController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Hotel'
    })
});


hotelController.get('/:id/edit', (req, res) => {
    res.render('edit', {
        title: 'edit hotel'
    })
});

module.exports = hotelController;