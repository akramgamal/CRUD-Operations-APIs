const mysql=require("mysql2")
const connection=mysql.createConnection({
    host:"localhost",
    port:3306,
    database:"shop",
    user:"root",
    password:"akram1999" 
})
module.exports=connection