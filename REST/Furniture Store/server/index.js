const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('./middlewares/cors');

const CONNECTION_STRING = 'mongodb://localhost:27017/furniture';

start();
async function start(){
    const app = express();
    
   await mongoose.connect(CONNECTION_STRING);
   console.log('DATABASE connected!')

    app.use(express.json());
    app.use(cors());
    
    app.get('/', (req, res) => {
        res.json({ message: 'REST Service opereational'});
    })
    
    app.listen(3030, () => console.log('REST Service started!'))
}
