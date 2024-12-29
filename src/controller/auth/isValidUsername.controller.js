const User = require('../../model/user.model');
const isValidUsernameController = async(req,res)=>{
    const {username} = req.body;
    if(!username){
        return res.status(400).json({error: `Username is not provided`});
    }

    try{
        const user = await User.find({userName : username});
        if(user.length){
            return res.status(400).json({error : `Username is already taken`});
        }else{
            return res.status(200).json({message : `Username is available`});
        }
    }catch(err){
        return res.status(500).json({error: `Internal Server Error`});
    }
}

module.exports = {isValidUsernameController};