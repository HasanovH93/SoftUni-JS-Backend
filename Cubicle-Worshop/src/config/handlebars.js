const handlebars = require('express-handlebars').create({
    extname: '.hbs',
})
const path = require('path');


const initHbs = (app) => {
    app.set('views', path.join(__dirname, '../views/'));
    app.set('view engine', '.hbs')
    app.engine('.hbs', handlebars.engine)
  

    // app.set('views', path.join(__dirname, '../src/views/'));
    // app.engine('hbs', handlebars.create(({ extname: 'hbs' ,defaultLayout: 'main'})).engine);
    // app.set('view engine', 'hbs');

}

module.exports = initHbs