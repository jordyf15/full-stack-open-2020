import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs';
import loginService from './services/loginService';
import LoginForm from './components/LoginForm';
import CreateNoteForm from './components/CreateNoteForm';
import './App.css'
import Toggable from './components/Toggable';
import {useSelector,useDispatch} from 'react-redux';
import {dispNotif} from './reducers/notifMessageReducer';
import {initBlogs,addBlog,likeBlog,deleteBlogReducer,commentBlog} from './reducers/blogsReducer';
import {loginUser,logoutUser} from './reducers/userReducer';
import {Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import User from './components/User';
import {initUserList} from './reducers/userListReducer';
import UserIndividual from './components/UserIndividual';
import {Button} from 'react-bootstrap';

const App = ()=>{
  const [username,setUsername]= useState('');
  const [password,setPassword]=useState('');
  const dispatch=useDispatch();
  const notifMessage=useSelector(state=>state.notifMessage)
  const blogs=useSelector(state=>state.blogs);
  const user=useSelector(state=>state.user);
  const userList=useSelector(state=>state.userList);

  const blogFormRef=useRef()

  const handleLogin=async(event)=>{
    event.preventDefault()
    const result=await loginService.login({username,password});
    if(result!==null){
    blogService.setToken(result.token)
    window.localStorage.setItem('loggedInUser',JSON.stringify(result));
      dispatch(loginUser(result));
  setUsername('');
    setPassword('');
    dispatch(dispNotif({message: `${result.name} has successfully login`,style: 'success'},3000))
    }else {
      dispatch(dispNotif({message:'wrong username or password',style: 'fail'},3000))
    }
  }

  const handleLogout=()=>{
    window.localStorage.removeItem('loggedInUser');
    dispatch(logoutUser());
    dispatch(dispNotif({message: `logout successful`,style: 'success'},3000))
  }

  const handleCreateNote=async(title,author,url)=>{
    const result=await dispatch(addBlog({title,author,url,user}));
    dispatch(dispNotif({message: `a new blog ${result.title} by ${result.author} added`,style: 'success'},3000))
    blogFormRef.current.toggleVisibility()

  }

  const handleCommentBlog=async(blogId,comment)=>{
    await dispatch(commentBlog(blogId,{comment}));
  }

  const handleLikeBlog=async(blogId)=>{
    await dispatch(likeBlog(blogId,user));
  }

  const handleDeleteBlog=async(blogId)=>{
      await dispatch(deleteBlogReducer(blogId));
  }

  useEffect(()=>{
    dispatch(initBlogs());
    dispatch(initUserList());
  }, [dispatch])

  useEffect(()=>{
    const loggedInUser=window.localStorage.getItem("loggedInUser");
    if(loggedInUser){
      dispatch(loginUser(JSON.parse(loggedInUser)));
      blogService.setToken(JSON.parse(loggedInUser).token)
    }
  },[dispatch])

  const matchUser=useRouteMatch('/users/:id');
  const indivUser=matchUser
  ? userList.find(user=>user.id===matchUser.params.id)
  : null;

  const matchBlog=useRouteMatch('/blogs/:id');
  const indivBlog=matchBlog
  ? blogs.find(blog=>blog.id===matchBlog.params.id)
  :null;

  if(user===null){
    return(
      <div className='container'>
        <h2 id='title'>log in to application</h2>
        {notifMessage!==null
        ?<div id={notifMessage.style} className='notification'>{notifMessage.message}</div>
        :<></>}
        <LoginForm handleLogin={handleLogin} username={username} setUsername={setUsername} 
        password={password} setPassword={setPassword}/>
        <div id='footer'>Created by Jordy Ferdian  
        <button onClick={()=>{window.location.href('https://github.com/jordyf15')}} className="fa fa-github fa-lg"></button>
        <button onClick={()=>window.location.href='https://www.linkedin.com/in/jordy-ferdian-3606041a7'} className="fa fa-linkedin-square fa-lg"></button><br/>
      </div>
      </div>
    )
  }

  return (
    <div className='container'>
      <header>
       <h2 id='title'>Blogs</h2>
       </header>
          
          <nav><p id="nav"><Link to='/'><b>blogs</b></Link>&nbsp;&nbsp;&nbsp;&nbsp;<Link to='/users'><b>users</b></Link> &nbsp;&nbsp;&nbsp;&nbsp;
             {user.name} logged in username: {user.username} <Button id="logout-button" onClick={handleLogout}>logout</Button></p>
          </nav>
          {notifMessage!==null
          ?<div id={notifMessage.style} className='notification'>{notifMessage.message}</div>
          :<></>}
    <Switch>
      <Route path='/blogs/:id'>
        <Blog blog={indivBlog} handleDeleteBlog={handleDeleteBlog} handleLikeBlog={handleLikeBlog} 
        handleCommentBlog={handleCommentBlog} user={user}/>
      </Route>
      <Route path='/users/:id'>
        <UserIndividual user={indivUser}/>
      </Route>
      <Route path='/users'>
        <User/>
      </Route>
      <Route path='/'>
          <Toggable buttonName="create" ref={blogFormRef}>
            <CreateNoteForm handleCreateNote={handleCreateNote}/>
          </Toggable>
          <br/>
          {blogs.map(blog=><Link className='blogStyle content' to={`/blogs/${blog.id}`} key={blog.id}>{blog.title}<br/></Link>
          )}
      </Route>
    </Switch>
      <footer>Created by Jordy Ferdian  
        <button onClick={()=>{window.location.href='https://github.com/jordyf15'}} className="fa fa-github fa-lg"></button>
        <button onClick={()=>window.location.href='https://www.linkedin.com/in/jordy-ferdian-3606041a7'} className="fa fa-linkedin-square fa-lg"></button><br/>
      </footer>
    </div>
  )
}

export default App