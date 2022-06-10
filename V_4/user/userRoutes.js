const express=require('express');
const { getAllUsers, signUp, signIn, updateProfile, softDelete } = require('./userConfig');
const app=express.Router();
const validateRequest=require('../common/validateRequest');
const validateRequestParams=require("../common/validateRequestParams");
const { signUpSchema, signInSchema, updateSchema, softDeleteSchema } = require('./userValidations');
app.get("/users",getAllUsers);
app.post("/signUp",validateRequest(signUpSchema),signUp);
app.post("/signIn",validateRequest(signInSchema),signIn);
app.put("/updateProfile/:id",validateRequest(updateSchema),updateProfile)
app.delete("/softDelete/:id",validateRequestParams(softDeleteSchema),softDelete)
module.exports=app;
