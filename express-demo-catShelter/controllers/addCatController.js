const router = require('express').Router()
const { getList } = require('../services/addBreedService')
const { createCat } = require('../services/addCatService')


router.get('/cats/add-cat', (req, res) => {
    const breeds = getList()
    res.render("addCat" , {
    breeds,
  });
})

router.post('/cats/add-cat', async (req,res) => {
   await createCat(req.body);
   res.redirect('/')
   
});


module.exports = router