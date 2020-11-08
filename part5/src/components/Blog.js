import React, { useState } from 'react'
const Blog = ({ blog,handleLikeBlog,handleDeleteBlog,user })=>{
  const [showDetail,setShowDetail]=useState(false);  
  const [likes,setLikes]=useState(blog.likes)
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const toggleShow=()=>{
    setShowDetail(!showDetail);
  }

  const addLike=({target})=>{
    handleLikeBlog(target.value);
    setLikes(likes+1);
  }

  const removeBlog=()=>{
    if(window.confirm(`Remove blog ${blog.title} by ${blog.author}`)){
      handleDeleteBlog(blog.id)
    }
  }


  if(showDetail){
    return(
      <div id={`blog-${blog.title}`} className="blog" style={blogStyle}>
        {blog.title} <button onClick={toggleShow}>hide</button><br/>
        {blog.url} <br/>
        likes {likes} <button id={`like-${blog.title}`} value={blog.id} onClick={addLike}> like</button><br/>
        {blog.author}<br/>
        {blog.user && blog.user.username===user.username?<button id={`remove-${blog.title}`} onClick={removeBlog}>remove</button>:<></>}
      </div>
    )
  }

  return (
  <div className="blog" style={blogStyle}>
    {blog.title} <button id={`view-${blog.title}`} onClick={toggleShow}>view</button>
  </div>
  )
}

export default Blog
