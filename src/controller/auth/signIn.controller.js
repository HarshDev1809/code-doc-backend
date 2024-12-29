const User = require("../../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { failureResponse, successResponse, serverErrorResponse } = require("../../../utils/responseHandler");
const { JWT_SECRET } = require("../../../config/token.config");

const signInController = async(req,res)=>{
    const {username,email,password} = req.body;
    const {verify = "username"} = req.query;
    try{
        const query = { [verify]: req.body[verify] };
        const user = await User.find(query)
        if(!user.length){
            return res.status(404).json(failureResponse("User Does not exist."));
        }
        const isValid = await bcrypt.compare(password,user[0].password);
        if(!isValid){
            return res.status(401).json(failureResponse("Invalid password"));
        }
        const token = jwt.sign({username},JWT_SECRET,{expiresIn: '1h'});
        const response = {
            username : user[0].username,
            email : user[0].email,
            firstName : user[0].name.firstName,
            lastName : user[0].name.lastName,
            token
        }
        return res.status(200).json(successResponse("User logged in",response));
    }catch(error){
        return res.status(500).send(serverErrorResponse(error.message));
    }
}

module.exports = signInController;