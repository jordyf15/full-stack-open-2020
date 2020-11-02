const errorHandlerMiddleware=(err,req,res,next)=>{
    console.log(err.name)
    if(err.name==='ValidationError'){
        return res.status(400).json({error: err.message})
    }
    if(err.name==='JsonWebTokenError'){
        return res.status(401).send('Unauthorized')
    }
    return res.status(400).json({error: `${err.name} , ${err.message}`})
}

const tokenExtractor=(req,res,next)=>{
    const authorization=req.get('authorization');
    if(authorization && authorization.toLowerCase().startsWith('bearer ')){
        req.token=authorization.substring(7);
    }
    next();
}

module.exports={
    errorHandlerMiddleware,tokenExtractor
}