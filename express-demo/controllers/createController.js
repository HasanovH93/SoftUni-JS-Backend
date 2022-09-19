const { create } = require('../services/productService')

const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('create')
})

router.post('/', (req,res) => {
    console.log('Handling Post')
    console.log(req.body)

    create(req.body.name, Number(req.body.price))
    res.redirect('/catalog')
});

module.exports = router