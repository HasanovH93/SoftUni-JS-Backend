const {Schema, model, Types} = require('mongoose');

const userSchema = new Schema({
    email: {type: String, required: true, unique: true, minlength: [3, 'Password must be at least 3 characters long']},
    skills: {type:String, required: true},
    hashedPassword: {type: String , required: true},
    ads: { type: [{ type: Types.ObjectId, ref: 'Ad'}]},
});
const User = model("User", userSchema);

userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

module.exports = User