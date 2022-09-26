const { Schema, model } = require("mongoose");

const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true, min: [0, "Age cannot be negative"] },
});

personSchema.methods.sayHi = function () {
  return `${this.firstName} says HI! `;
};

personSchema.virtual("name").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const person = model("Person", personSchema);

module.exports = person;
