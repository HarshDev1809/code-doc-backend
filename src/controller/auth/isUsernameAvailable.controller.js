const User = require('../../model/user.model');
const isUsernameAvailableController = async(req,res)=>{
    const {username} = req.body;
    if(!username){
        return res.status(400).json({status : 'failure', message : "`Username is not provided`."});
    }

    try{
        const user = await User.find({username : username});
        if(user.length){
            return res.status(400).json({status : 'successful', available : false, message : "Username Already Taken."});
        }else{
            return res.status(200).json({status : 'successful', available : true,message : "Username Available."});
        }
    }catch(err){
        return res.status(500).json({error: `Internal Server Error`});
    }
}

module.exports = {isUsernameAvailableController};