const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/testdb";
const Person = require("./models/Person");
const Cat = require('./models/Cat')

start();
async function start() {
  await mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

  //  const cat = new Cat({
  //     name:"Gary",
  //     color:"Turquise",
  //     age: 9
  //  });

  //  await cat.save()
  
  const data = await Cat
  .find({})
  .where('age').gte(5).lte(6)
  .select()
  console.log(data)


  await mongoose.disconnect();
}
