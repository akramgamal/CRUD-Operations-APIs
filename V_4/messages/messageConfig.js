const { StatusCodes } = require("http-status-codes");
const User = require("../user/userModel");
const Message = require("./messageModel")

const getMessages=async (req,res)=>{
 try{
    const message=await Message.find({}).populate("sendTo").populate("sentBy");
    
    res.status(StatusCodes.OK).json({data:message});
 }catch(err){
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err});

 }
}
const sendMessage=async (req,res)=>{
    try{
       const {message,sendTo,sentBy}=req.body;
       const user1=await User.findOne({_id:sendTo,isDeleted:false});
       const user2=await User.findOne({_id:sentBy,isDeleted:false});
       if(user1&&user2){
        const newMessage=new Message({message,sendTo,sentBy});
        const data=await newMessage.save();
        res.status(StatusCodes.CREATED).json({success:data});
       }else{
        res.status(StatusCodes.BAD_REQUEST).json({error:"user not found"});
       }
    }catch(err){
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err});
   
    }
}
const DeleteMessage=async (req,res)=>{
    try{
       const {id}=req.params;
       const message=await Message.deleteOne({_id:id});
       res.status(StatusCodes.OK).json({success:message});
    }catch(err){
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({err});
   
    }
}
module.exports={getMessages,sendMessage,DeleteMessage}