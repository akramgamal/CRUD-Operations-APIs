const mongo=require("mongoose");
const messageSchema = require("./messageSchema");
const Message=mongo.model('Message',messageSchema);
module.exports=Message;