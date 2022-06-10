const { StatusCodes } = require("http-status-codes");
module.exports=(schema)=>{
  return (req,res,next)=>{
 const validate = schema.params.validate(req.params);
   if(validate.error){
    res.status(StatusCodes.BAD_REQUEST).json({error:validate.error.details[0].message});
   }else{
       next();
   }
  }
}