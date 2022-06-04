const express=require("express")
const app=express.Router();
const { getAllPosts, addPost, updatePost, deletePost } = require("./postconfig");
app.get("/posts",getAllPosts);
app.post("/addPost",addPost);
app.put("/updatePost/:id/:userId",updatePost)
app.delete("/deletePost/:id/:userId",deletePost)
app.get("/getuser/:queryKey",)
module.exports=app;