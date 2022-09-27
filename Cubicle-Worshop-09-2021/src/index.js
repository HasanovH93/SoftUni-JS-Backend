const express = require('express');
const initHbs = require('../config/handlebars');


const app = express();

initHbs(app)


app.get('/', (req, res) => {
    res.render('index')
});

app.listen(3000, () => {
  console.log('Server listening on port 3000....')
})