const express=require('express');
const { getAllUsers, addUser, getUserByQuery, updateUser, deleteUser } = require('./userconfig');
const app=express.Router();
app.get('/users',getAllUsers);
app.post('/addUser',addUser);
app.post("/getuser/:queryKey",getUserByQuery);
app.put("/updateUser/:id",updateUser);
app.delete("/deleteUser/:id",deleteUser)
module.exports=app;