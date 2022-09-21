const router = require('express').Router()
const { getList } = require('../services/addBreedService')

router.get('/cats/add-cat', (req, res) => {
    const breeds = getList()
    console.log(breeds)
    res.render("addCat" , {
    breeds,
  });
})


module.exports = router