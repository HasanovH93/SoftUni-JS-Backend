const path = require('path');
const {engine} = require('express-handlebars')




const initHbs = (app) => {
    app.engine('hbs', engine(({ extname: 'hbs'})));
    app.set("view engine", ".hbs");
    app.set('views', path.join(__dirname, '../views/'));
  };
  
  module.exports = initHbs