const mongodb = require('mongodb');


const connectionString = 'mongodb://localhost:27017'

const connection = new mongodb.MongoClient(connectionString, {
    useUnifiedTopology: true

});

start()
async function start() {
    connection.connect((err,client) => {
        const db =  client.db('testdb');
        const collection = db.collection('people')
        const query = collection.find({});
        query.toArray((err,data) => {
          console.log(data);
        })
      })
}
