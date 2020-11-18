const loginRouter=require('express').Router();
const User=require('../models/user');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');

loginRouter.route('/')
.post(async(req,res)=>{
    const user=await User.findOne({username: req.body.username});
    const passwordCorrect= user===null
    ?false
    :await bcrypt.compare(req.body.password,user.password)

    if(user===null || passwordCorrect===false){
        return res.status(401).json({error: 'username or password is invalid'})
    }

    const userForToken={
        username: user.username,
        id: user._id
    }

    const token=jwt.sign(userForToken,process.env.SECRET)
    res.status(200)
    .json({token, username: user.username, name: user.name})
})


module.exports=loginRouter;