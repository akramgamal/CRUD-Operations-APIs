const mongo = require("mongoose");
const userSchema = mongo.Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
    isDeleted:Boolean
}, { timestamps: true })
module.exports = userSchema;