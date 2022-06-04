const { DataTypes } = require("sequelize");
const { newSequelize } = require("../DB/db");
const users = require("./users");
posts=newSequelize.define("posts",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true 
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    content:{
        type:DataTypes.STRING,
        allowNull:false,
    }
})
module.exports=posts;