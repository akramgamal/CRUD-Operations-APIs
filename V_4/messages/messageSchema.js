const mongo = require("mongoose");
const messageSchema = mongo.Schema({
    message: String,
    sendTo: { type: mongo.Schema.Types.ObjectId, ref: "User" },
    sentBy: { type: mongo.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true })
module.exports = messageSchema;