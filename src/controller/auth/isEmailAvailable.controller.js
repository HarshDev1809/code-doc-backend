const { successResponse, failureResponse, serverErrorResponse } = require('../../../utils/responseHandler');
const User = require('../../model/user.model');
const isEmailAvailableController = async(req,res)=>{
    const {email} = req.body;
    if(!email){
        return res.status(400).json(failureResponse("Email not provided."));
    }

    try{
        const user = await User.find({email : email});
        if(user.length){
            return res.status(200).json(successResponse("Email already taken.",{available: false}));
        }else{
            return res.status(200).json(successResponse("Email available.",{available: true}));
        }
    }catch(err){
        return res.status(500).json(serverErrorResponse(err.message));
    }
}

module.exports = {isEmailAvailableController};