const userRouter=require('express').Router();
const User=require('../models/user');
const bcrypt=require('bcrypt');

userRouter.route('/')
.get(async(req,res)=>{
    const users=await User.find().populate('blogs',{title:1,author:1,url:1,likes:1,id:1});
    res.json(users);
})
.post(async(req,res,next)=>{
    try{
        if(!req.body.password){
            throw {name: 'ValidationError', message: 'Password is required'}
        }
        if(req.body.password.length<3){
            throw {name: 'ValidationError', message: 'Password must be atleast 3 character'}
        }
        const saltRounds=10;
        const passwordHash=await bcrypt.hash(req.body.password,saltRounds)
        const newUser= new User({
            username: req.body.username,
            name: req.body.name,
            password: passwordHash
        })

        const savedUser=await newUser.save();
        res.json(savedUser);
    }catch(err){
        next(err)
    }
})

module.exports=userRouter;


