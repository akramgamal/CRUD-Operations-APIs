const mongo = require("mongoose");
const userSchema = require("./userSchema");
const User = mongo.model('User', userSchema);
module.exports = User;