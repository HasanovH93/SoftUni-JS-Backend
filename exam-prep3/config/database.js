const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://localhost:27017/wildlife';

module.exports = async (app) => {
    try {
        await mongoose.connect(CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
          console.log("Database connected");

          mongoose.connection.on('error', (err) => {
            console.log("Database Error");
            console.log(err)
          })
    }catch(err){
      console.error('Error connection to database');
      process.exit(1)
    }

 
}