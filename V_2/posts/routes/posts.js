let express=require('express');
const { addpost } = require('../config/config');
const app=express.Router();
app.post("/addpost",addpost)
module.exports=app