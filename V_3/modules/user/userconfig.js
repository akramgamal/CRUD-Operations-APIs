const { Op } = require('sequelize');
const users = require('../../tables/users');
getAllUsers = async (req, res) => {
    try {
        const data = await users.findAll({});
        res.json(data);
    } catch (error) {
        res.json(error);
    }

}
const addUser = async (req, res) => {
    const { first_name, last_name, email, password } = req.body;
    try {
        const data = await users.create({ first_name, last_name, email, password });
        res.json(data);
    } catch (err) {
        res.json(err)
    }
}
const getUserByQuery=async(req,res)=>{
    const {queryKey}=req.params;
    if(queryKey=='id'){
     const {id}=req.body;
     try{
         const data=await users.findAll({include:[{
             model:posts,
         }],where:{id:id}});
         res.json(data);
     }catch(err){
         res.json(err);
     }
    }else if(queryKey=='searchKey'){
        const {searchKey}=req.body;
        try{
            const data=await users.findAll({where:{
                [Op.or]:[
                    {
                        first_name:{
                            [Op.substring]: searchKey
                        }
                    },
                    {
                        last_name:{
                            [Op.substring]: searchKey
                        }
                    }   
                ]
            }});
            res.json(data);
        }catch(err){
            res.json(err);
        }

    }else{
        try{
            const data=await users.findAll({include:[{
                model:posts,
            }]});
            res.json(data);
        }catch(err){
            res.json(err);
        }
    }
}
const updateUser=async(req,res)=>{
    const{id}=req.params
    const{email,password}=req.body
    try{
        const data=await users.update({email,password},{where:{
          id:id
        }})
        res.json(data);
        }catch(err){
           res.json(err);
        }
}
const deleteUser=async(req,res)=>{
    const{id}=req.params
    try{
        const data=await users.destroy({where:{
          id:id
        }})
        res.json(data);
        }catch(err){
           res.json(err);
        }
}
module.exports = {
    getAllUsers,
    addUser,
    getUserByQuery,
    updateUser,
    deleteUser
}