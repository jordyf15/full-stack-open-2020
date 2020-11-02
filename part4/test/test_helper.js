const Blog=require('../models/blog');
const User=require('../models/user');
const initialBlogs=[
    {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5
      }, {
        title: 'Hifumi is best new game girl',
        author: 'the creator of this project',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 15
      }, {
        title: 'random book you dont need',
        author: 'some random dude',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 10
      }
]

const blogsInDB=async()=>{
    const blogs=await Blog.find();
    
    return blogs.map(blog=>blog.toJSON());
}

const usersInDB=async()=>{
  const users=await User.find();
  return users.map(user=>user.toJSON())
}
module.exports={
    initialBlogs,blogsInDB,usersInDB
}