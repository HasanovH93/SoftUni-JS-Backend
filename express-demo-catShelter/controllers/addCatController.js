const router = require('express').Router()

router.get('/cats/add-cat', (req, res) => {
    console.log("GET")
    res.render('addCat')
})


module.exports = router