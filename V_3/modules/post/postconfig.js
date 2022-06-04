const users = require("../../tables/users");
const posts = require("../../tables/posts");
const { Op } = require("sequelize");
const getAllPosts=async(req,res)=>{
    const data=await posts.findAll({include:[{
        model:users
    }]});
    res.json(data)
}
const addPost=async(req,res)=>{
    const {title,content,userId}=req.body;
    
    try{
        const data=await posts.create({title:title,content:content,userId:userId});
        res.json(data)
    }catch(err){
        res.json(err)
    }
}
const updatePost=async(req,res)=>{
    const {id,userId}=req.params;
    const {title,content}=req.body;
    try{
    const data=await posts.update({title,content},{where:{
       [Op.and]:[
           {id:id},
           {userId:userId}
       ]
    }})
    res.json(data);
    }catch(err){
       res.json(err);
    }
}
const deletePost=async(req,res)=>{
    const {id,userId}=req.params;
    try{
    const data=await posts.destroy({where:{
       [Op.and]:[
           {id:id},
           {userId:userId}
       ]
    }})
    res.json(data);
    }catch(err){
       res.json(err);
    }
}
module.exports={
    getAllPosts,
    addPost,
    updatePost,
    deletePost
}