const Blog=require('../models/blog.js');
const User=require('../models/user.js');
const jwt=require('jsonwebtoken')
const blogRouter=require('express').Router();

blogRouter.get('/',async (request, response) => {
  const blogs=await Blog.find({}).populate('user',{username: 1, name: 1, id:1})
  response.json(blogs);
  
  })
  
blogRouter.post('/',async (request, response,next) => {
  try{
    let blog = new Blog(request.body)
    const decodedToken=jwt.verify(request.token, process.env.SECRET);
    blog.user=decodedToken.id;
    console.log(decodedToken.id)
    let user=await User.findById(decodedToken.id);
    console.log(user);

    if(!blog.likes){
      blog.likes=0
    }
    if(!blog.title || !blog.url){
      return response.status(400).end()
    }
    const result=await blog.save();
    user.blogs.push(result.id)
    await user.save();
    response.status(201).json(result);
  }catch(err){
    next(err);
  }
})

blogRouter.delete('/:id',async(req,res,next)=>{
  try{
  const deletedBlog=await Blog.findById(req.params.id)
  const decodedToken=jwt.verify(req.token,process.env.SECRET);
  if(decodedToken.id===deletedBlog.user.toString()){
    await Blog.deleteOne({_id: deletedBlog._id})
    console.log('deleted')
    return res.status(204).json({result: 'deletion successful'});
  }
  res.status(401).json({error: 'you are not the creator of this blog'})
  }catch(err){
    next(err)
  }
})

blogRouter.put('/:id',async(req,res,next)=>{
  // if(isNaN(req.body.likes)===false){
    const updatedBlog=await Blog.findById(req.params.id)
    updatedBlog.likes+=1;
    const result= await updatedBlog.save();
    res.status(200).json(result)
  // }else{
  //   res.status(404).json({error: 'likes must be number'})
  // }
})
 

  module.exports=blogRouter
  