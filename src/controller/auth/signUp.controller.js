const User = require("../../model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { failureResponse, successResponse, serverErrorResponse } = require("../../../utils/responseHandler");
const { JWT_SECRET } = require("../../../config/token.config");

const signUpController = async(req,res)=>{
    const {username,password,email,firstName,lastName} = req.body;
    try{
        const hashedPassword = await bcrypt.hash(password,10);
        const user = {
            username : username,
            password : hashedPassword,
            email : email,
            name:{
                firstName,
                lastName
            }
        }

        const newUser = new User(user)
        const savedUser = await newUser.save();
        if(!savedUser){
            return res.status(422).send(failureResponse("Something Went wrong while registering user"));
        }
        const token = jwt.sign({username},JWT_SECRET,{ expiresIn: '1h' });
        const response = {
            username,
            email,
            firstName,
            lastName,
            token : token
        }
        return res.status(201).send(successResponse("User registered successfully.",response));
    }catch(error){
        return res.status(500).send(serverErrorResponse(error.message))
    }
}

module.exports = signUpController