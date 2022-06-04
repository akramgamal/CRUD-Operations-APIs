const sequelize=require('sequelize')
const newSequelize=new sequelize('shop','root','akram1999',{
    host:'localhost',
    dialect:'mysql'
})
const createTables=()=>{
    newSequelize.sync().then().catch((err)=>{
        console.log(err);
    })
}
module.exports={
    newSequelize,
    createTables
}