const { DataTypes } = require("sequelize");
const { newSequelize } = require("../DB/db");
const posts=require("../tables/posts")
const users=newSequelize.define('users',{
    id:{
        autoIncrement:true,
        type:DataTypes.INTEGER,
        primaryKey:true
    },
    first_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    last_name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        required:true
    }
},{timeStamps:true});
users.hasMany(posts)
posts.belongsTo(users)
module.exports=users;