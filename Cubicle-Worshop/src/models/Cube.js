const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desciption: { type: String, required: true, maxlength: 100 },
  imgUrl: { type: String, required: true, validate: /^https?:\/\//i },
  difficultyLevel: {
    type: Number,
    require: true,
    min: 1,
    max: 5,
  },
});

const Cube = mongoose.model('Cube', cubeSchema);
module.exports = Cube
