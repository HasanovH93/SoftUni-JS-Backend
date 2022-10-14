const express = require('express')

const router = express.Router();

router.get('/create', (req,res) => {
    console.log("GET")
    res.render('accessory/create');
});

router.post('/create', (req, res) => {
    const accessory = req.body;
    console.log(accessory);

    res.redirect('/')
})


module.exports = router;