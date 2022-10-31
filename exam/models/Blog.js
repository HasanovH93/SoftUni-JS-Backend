const {Schema, model, Types} = require('mongoose');
const { ObjectID } = require('bson')

const blogSchema = new Schema({
    title: {type:String, required:true},
    image: {type: String},
    content: {type:String, required:true},
    category: {type:String, required:true}
})

const Blog = model("Blog", blogSchema);

module.exports = Blog