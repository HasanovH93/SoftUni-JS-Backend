const express = require('express')
const hbr = require('express-handlebars')
const homeController = require('./controllers/homeController')
const catalogController = require('./controllers/catalogController')

const handlebars = hbr.create({
    extname: '.hbs',
});

const app = express()

app.engine('.hbs',handlebars.engine);
app.set('view engine', '.hbs');

app.use(homeController);
app.use('/catalog', catalogController)


app.listen(3000)