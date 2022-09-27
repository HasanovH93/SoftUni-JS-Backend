const handlebars = require('express-handlebars')
const path = require('path');


const initHbs = (app) => {
    app.set('views', path.join(__dirname, '../src/views/'));
    app.set('view engine', '.hbs')
    app.engine('.hbs', handlebars.create(({
        extname: '.hbs',
    })).engine);
  

    // app.set('views', path.join(__dirname, '../src/views/'));
    // app.engine('hbs', handlebars.create(({ extname: 'hbs' ,defaultLayout: 'main'})).engine);
    // app.set('view engine', 'hbs');

}

module.exports = initHbs