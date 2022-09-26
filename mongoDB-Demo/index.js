const mongoose = require("mongoose");

const connectionString = "mongodb://localhost:27017/testdb";
const Person = require("./models/Person");

start();
async function start() {
  await mongoose.connect(connectionString, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });

   const person = new Person({
      firstName: "John",
      lastName: "Smith",
      age:30,
   });

   await person.save()
  
  const data = await Person.find({});
  console.log(data[0].sayHi());
  console.log(data[0].name)

  await mongoose.disconnect();
}
