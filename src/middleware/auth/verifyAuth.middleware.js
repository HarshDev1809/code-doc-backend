const verifySignUpMiddleware = async(req,res,next)=>{
    const {username,email,password,firstName} = req.body;
    if(!username){
        return res.status(400).json({error : `Username is not provided`});
    }

    if(!email){
        return res.status(400).json({error : `Email is not provided`});
    }

    if(!password){
        return res.status(400).json({error : `Password is not provided`});
    }

    if(!firstName){
        return res.status(400).json({error : `First name is not provided`});
    }

    next();
};

const verifySignInMiddleware = async(req,res,next)=>{
    const {isUsername,email,username,password} = req.body;
    if(isUsername && !username){
        return res.status(400).json({error : `Username is not provided`});
    }

    if(!isUsername && !email){
        return res.status(400).json({error : `Email is not provided`});
    }

    if(!password){
        return res.status(400).json({error : `Password is not provided`});
    }
}

const verifyUserMiddleware = async(req,res,next)=>{
    
}

