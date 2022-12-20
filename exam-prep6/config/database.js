const mongoose = require('mongoose')



//TODO change database according to assignment
const CONN_STRING = 'mongodb://localhost:27017/examPrem7'


module.exports = async (app) => {
   try {
    await   mongoose.connect(CONN_STRING, {
        useNewUrlParser:true,
        useUnifiedTopology: true
    });
    console.log('DB Connected')
   } catch (error) {
    console.error(err.message);
    process.exit(1)
   }
}