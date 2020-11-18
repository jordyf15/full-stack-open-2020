import React,{useState} from 'react';
import {useHistory} from 'react-router-dom';
const Blog = ({ blog,handleLikeBlog,handleDeleteBlog,handleCommentBlog,user })=>{
  const history=useHistory();
  const [comment,setComment]=useState('');
  if(!blog){
    return null;
  }

  const addLike=()=>{
    console.log('blog user',blog.user)
    handleLikeBlog(blog.id);
  }

  const removeBlog=()=>{
    if(window.confirm(`Remove blog ${blog.title} by ${blog.author}`)){
      handleDeleteBlog(blog.id)
    }
    history.push('/')
  }

  const commentBlog=()=>{
    handleCommentBlog(blog.id,comment)
  }

  return (
  <div className='content'>
      <h2>{blog.title}</h2>
      <a href={blog.url} target='_blank' rel="noreferrer">{blog.url}</a><br/>
      {blog.likes} likes <button onClick={addLike}>like</button><br/>
      {blog.user?<>added by {blog.user.username}<br/></>:null}
      {blog.user && blog.user.username===user.username?<button onClick={removeBlog}>remove</button>:null}
      <br/>
      <ul id='comment-list'>
      <b>Comments</b>
        {blog.comments.map(comment=><li key={comment._id}>{comment.comment}</li>)}
      </ul>
      <input name="comment" value={comment} onChange={(e)=>setComment(e.target.value)}/>
        <button onClick={commentBlog}>add comment</button>
  </div>
  )
}

export default Blog;
