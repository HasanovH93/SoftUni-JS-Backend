const {  getCatsList } = require('../services/addBreedService')

const router = require('express').Router()

router.get('/', (req, res) => {
    const cats = getCatsList()
    res.render('home', {
        cats,
    })
})





module.exports = router