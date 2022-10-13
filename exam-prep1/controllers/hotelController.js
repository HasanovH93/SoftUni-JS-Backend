const hotelController = require('express').Router();

hotelController.get('/:id/details', (req, res) => {
     res.render('details', {
        title: 'Hotel Details'
     });
});

hotelController.get('/create', (req, res) => {
    res.render('create', {
       title: 'Hotel Details'
    });
});
hotelController.get('/:id/edit', (req, res) => {
    res.render('edit', {
       title: 'Hotel Details'
    });
});

module.exports = hotelController;