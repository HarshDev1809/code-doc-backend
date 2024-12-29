const { failureResponse, successResponse, serverErrorResponse } = require('../../../utils/responseHandler');
const User = require('../../model/user.model');
const isUsernameAvailableController = async(req,res)=>{
    const {username} = req.body;
    if(!username){
        return res.status(400).json(failureResponse("Username not provided."));
    }

    try{
        const user = await User.find({username : username});
        if(user.length){
            return res.status(200).json(successResponse("Username already taken.",{available : false}));
        }else{
            return res.status(200).json(successResponse("Username Available",{available : true}));
        }
    }catch(err){
        return res.status(500).json(serverErrorResponse(err.message));
    }
}

module.exports = {isUsernameAvailableController};