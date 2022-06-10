const mongo =require("mongoose");
const dbConnection=()=>mongo.connect(process.env.MONGO_CONNECTION).then().catch((err)=>{
    console.log(err);
});
module.exports=dbConnection;