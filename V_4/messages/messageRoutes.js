const express=require("express");
const {sendMessage,getMessages, DeleteMessage}=require("../messages/messageConfig");
const validateRequest=require('../common/validateRequest');
const { addMessageSchema } = require("./messageValidations");
const app=express.Router();
app.get('/getMessages',getMessages);
app.post('/sendMessage',validateRequest(addMessageSchema),sendMessage);
app.delete("/DeleteMessage/:id",DeleteMessage)
module.exports=app;