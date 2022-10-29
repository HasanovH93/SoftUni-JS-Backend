const {Schema, model, Types} = require('mongoose');

const adSchema = new Schema({
    headline : {type:String, required:true},
    location: {type:String, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    author: {type: Types.ObjectId, ref: "User"},
    applied: [{type: Types.ObjectId, ref: "User"}]
});

const Ad = model('Ad', adSchema);

module.exports = Ad;