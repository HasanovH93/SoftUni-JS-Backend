const { model, Schema} = require('mongoose')

const articleSchema = new Schema({
    author: String,
    title: { type : String , required : true , minLength: 10},
    content: { type : String , required : true , minLength: 10}
});

const Article = model('Article', articleSchema);

module.exports = Article;