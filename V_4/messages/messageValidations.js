const joi=require("joi");
module.exports={
    addMessageSchema:{
        body:joi.object().required().keys({
            message:joi.string(),
            sendTo:joi.string().required(),
            sentBy:joi.string().required()
        })
    }
}