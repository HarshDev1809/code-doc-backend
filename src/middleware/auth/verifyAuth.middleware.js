const { failureResponse } = require("../../../utils/responseHandler");
const User = require("../../model/user.model")
const verifySignUpMiddleware = async(req,res,next)=>{
    const {username,email,password,firstName} = req.body;
    if(!username){
        
        return res.status(400).json(failureResponse(`Username is not provided`));
    }

    if(!email){
        
        return res.status(400).json(failureResponse(`Email is not provided`));
    }

    if(!password){
        
        return res.status(400).json(failureResponse(`Password is not provided`));
    }

    if(!firstName){
        return res.status(400).json(failureResponse(`First name is not provided`));
    }
    try{
        const user = await User.find({
            $or: [
                { username: username },
                { email: email }
              ]
        })

        if(user.length){
            return res.status(409).json(failureResponse(`User already exist.`));
        }else{
            next()
        }
    }catch(error){
        return res.status(500).json(failureResponse(`Something went wrong while verifying user`,error.message))
    }
};

const verifySignInMiddleware = async(req,res,next)=>{
    const {username,email,password} = req.body;
    const {verify = "username"} = req.query;
    if(verify === "username" && !username){
        return res.status(400).json(failureResponse(`Username is not provided`));
    }

    if(verify === "email" && !email){
        return res.status(400).json(failureResponse(`Email is not provided`));
    }

    if(!password){
        return res.status(400).json(failureResponse(`Password is not provided`));
    }

    next();
}

module.exports = {
    verifySignUpMiddleware,
    verifySignInMiddleware
}

