const router = require('express').Router()

router.get('/', (req, res) => {
    console.log("GET")
    res.render('home')
})


module.exports = router