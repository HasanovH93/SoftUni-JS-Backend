const path = require('path');




const initHbs = (app, handlebars) => {
    app.engine('hbs', handlebars.create(({ extname: 'hbs'})).engine);
    app.set("view engine", ".hbs");
    app.set('views', path.join(__dirname, '../views/'));
  };
  
  module.exports = initHbs