const {Schema, model, Types} = require('mongoose');

const blogSchema = new Schema({
    title: {type:String, required:true},
    image: {type: String},
    content: {type:String, required:true},
    category: {type:String, required:true},
    followList: { type: [Types.ObjectId], ref: "User", default: [] },
    owner: { type: Types.ObjectId, ref: "User" },
})



const Blog = model("Blog", blogSchema);

module.exports = Blog