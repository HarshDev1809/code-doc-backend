const User = require('../../model/user.model');
const isEmailAvailableController = async(req,res)=>{
    const {email} = req.body;
    if(!email){
        return res.status(400).json({status : 'failure', message : `Email is not provided.`});
    }

    try{
        const user = await User.find({email : email});
        if(user.length){
            return res.status(200).json({status : 'successful', available : false, message : "Email Already Taken."});
        }else{
            return res.status(200).json({status : 'successful', available : true,message : "Email Available."});
        }
    }catch(err){
        return res.status(500).json({error: `Internal Server Error`});
    }
}

module.exports = {isEmailAvailableController};