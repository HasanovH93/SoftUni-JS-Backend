const mongodb = require('mongodb');


const connectionString = 'mongodb://localhost:27017'

const connection = new mongodb.MongoClient(connectionString, {
    useUnifiedTopology: true

});

start()
async function start() {
    connection.connect();
 
        const db =  connection.db('testdb');
        const collection = db.collection('people')
        const query = collection.find({});
      
        const data = await query.toArray;
        console.log(data)
      
    }