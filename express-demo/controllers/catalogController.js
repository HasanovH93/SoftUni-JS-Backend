const router = require('express').Router()

router.get('/', (req,res) => {
    res.render('catalog')
});

router.get('/:productId',(req,res) => {
    res.render('details')
})

module.exports = router