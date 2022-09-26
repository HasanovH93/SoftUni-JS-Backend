const articleController = require('express').Router();

articleController.get('/', (req, res) => {
   res.render('article')
});


module.exports = articleController;