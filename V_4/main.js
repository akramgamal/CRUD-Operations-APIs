const express=require('express');
const dbConnection = require('./DB/dbConnection');
const app=express();
require("dotenv").config();
dbConnection();
app.use(express.json());
app.use(require("./user/userRoutes"));
app.use(require("./messages/messageRoutes"));
app.listen(process.env.PORT,()=>{
    console.log("server is running...");
})