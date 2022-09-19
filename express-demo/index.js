const express = require('express')
const hbr = require('express-handlebars')
const homeController = require('./controllers/homeController')

const handlebars = hbr.create({
    extname: '.hbs',
});

const app = express()

app.engine('.hbs',handlebars.engine);
app.set('view engine', '.hbs');

app.use(homeController);


app.listen(3000)