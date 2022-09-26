const express = require('express');
const mongoose = require('mongoose');
const articleController = require('./Controllers/articleController');
const homeController = require('./Controllers/homeController')
const hbs = require('express-handlebars').create({
    extname: '.hbs'
});

const connStr = "mongodb://localhost:27017/testdb";

start()

async function start(){
    const app = express();
    app.engine('.hbs', hbs.engine);
    app.set('view engine','.hbs');
    
    app.use(homeController)
    app.use('/article',articleController)

    await mongoose.connect(connStr, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('Databes is running');

    
    app.listen(3000, () => console.log("App is running...."));
    
}

