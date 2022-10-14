const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: [true, 'Img url is required'] , validate: [/https?:\/\//i,'Img url is invalid']},
    descriotion: {type:String, required: true, maxLength: 50}
});

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;