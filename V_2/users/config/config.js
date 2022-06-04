const connection=require("../../DB/db.js")
const getAllUsers=(req,res)=>{
    let q="select * from users"
    connection.execute(q,(err,data)=>{
        if(err){
            res.json({message:err})
        }else{
        res.json(data)
        }
    })   
}
const addUser=(req,res)=>{
  let {first_name,last_name,email,age,password,location,dept,is_admin}=req.body
  let q=`insert into users (first_name, last_name, email,age, password, location, dept, is_admin) values('${first_name}','${last_name}','${email}',${age},'${password}','${location}','${dept}','${is_admin}')`
  connection.execute(q,(err,data)=>{
      if(err){
        res.json({message:err})
      }else{
        res.json(data)
      }
  })
}
const update=(req,res)=>{
    let {id}=req.params
    let {email}=req.body
    let q=`update users set email='${email}' where id=${id}`
    connection.execute(q,(err,data)=>{
        if(err){
            res.json({message:err})
          }else{
            res.json(data)
          }
    })
}
const deleteuser=(req,res)=>{
    let {id}=req.params
    let q=`delete from users where id=${id}`
    connection.execute(q,(err,data)=>{
        if(err){
            res.json({message:err})
        }else{
            res.json(data)
        }
    })
}
const getById=(req,res)=>{
    let {id}=req.params
    let q=`select * from users where id=${id}`
    connection.execute(q,(err,data)=>{
        if(err){
            res.json({message:err})
        }else{
            res.json(data)
        }
    })
}
const searchByName=(req,res)=>{
   let {first_name}=req.body
   let q=`select * from users where first_name like '%${first_name}%'`
   connection.execute(q,(err,data)=>{
    if(err){
        res.json({message:err})
    }else{
        res.json(data)
    }
   })
}
const reverseUsers=(req,res)=>{
    let q="select * from users"
    connection.execute(q,(err,data)=>{
        if(err){ 
            throw new Error(data)
        }else{
            res.json(data.reverse())
        }
    })  
   
}
const userAge=(req,res)=>{
    let q=`select * from users where age between 20 and 40`
    connection.execute(q,(err,data)=>{
        if(err)throw err
        else res.json(data)
    })
}
const NameAndAge=(req,res)=>{
    let q=`select * from users where first_name like 'A%' and age<30`
    connection.execute(q,(err,data)=>{
        if(err)throw err
        else res.json(data)
    })
}
const NameAndAge2=(req,res)=>{
    let q=`select * from users where first_name REGEXP 'd$' or age>50`
    connection.execute(q,(err,data)=>{
        if(err)throw err
        else res.json(data)
    })
}
const NameAndAge3=(req,res)=>{
    let q=`select * from users where first_name like '%r%' and age>20 and age<25`
    connection.execute(q,(err,data)=>{
        if(err)throw err
        else res.json(data)
    })
}
const limit=(req,res)=>{
    q=`SELECT * from users limit 3,6`
    connection.execute(q,(err,data)=>{
        if(err)throw err
        else res.json(data)
    })
}
const posts=(req,res)=>{
    let q=`select * from users join posts where users.id=posts.user_id`
    connection.execute(q,(err,data)=>{
        if(err)throw err
        else res.json(data)
    })
}
module.exports={
    getAllUsers,addUser,update,deleteuser,getById,searchByName,reverseUsers,
    userAge,NameAndAge,NameAndAge2,NameAndAge3,limit,posts
}