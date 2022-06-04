const connection = require("../../DB/db")

const addpost=(req,res)=>{
    let {user_id,title,body}=req.body
    let q=`INSERT INTO posts(user_id, title, body) VALUES (${user_id}, '${title}', '${body}')`
    connection.execute(q,(err,data)=>{
        if(err)throw err
        else res.json(data)
    })
}
module.exports={addpost}