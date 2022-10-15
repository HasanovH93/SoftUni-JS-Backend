const router = require('express').Router();

const { create } = require('../services/accessoryService')

router.get('/create', (req,res) => {
    console.log("GET")
    res.render('accessory/create');
});

router.post('/create', async (req, res) => {
    const { name, description, imageUrl } = req.body;

    await create(name,description,imageUrl)

    res.redirect('/')
})


module.exports = router;