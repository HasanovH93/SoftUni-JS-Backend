const { Schema, model } = require("mongoose");

const personSchema = new Schema({
  name: { type: String, required: true },
  color: { type: String,required: true },
  age: {type: Number, required: true }
 
});



const person = model("Cat", personSchema);

module.exports = person;