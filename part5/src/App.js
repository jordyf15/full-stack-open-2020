import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs';
import loginService from './services/loginService';
import LoginForm from './components/LoginForm';
import CreateNoteForm from './components/CreateNoteForm';
import './App.css'
import Toggable from './components/Toggable';

const App = ()=>{
  const [blogs, setBlogs] = useState([])
  const [username,setUsername]= useState('');
  const [password,setPassword]=useState('');
  const [user,setUser]=useState(null);
  // const [title,setTitle]=useState('');
  // const [author,setAuthor]=useState('');
  // const [url,setUrl]=useState('');
  const [notifMessage,setNotifMessage]=useState(null);
  const blogFormRef=useRef()

  const fetchData=async()=>{
    let blogs=await blogService.getAll();
      blogs.sort((a,b)=>{
        return b.likes-a.likes
      })
      return blogs;
  }

  const handleLogin=async(event)=>{
    event.preventDefault()
   console.log('user nya login')
    const result=await loginService.login({username,password});
    console.log(result);
    if(result!==null){
    blogService.setToken(result.token)
    window.localStorage.setItem('loggedInUser',JSON.stringify(result));
   setUser(result);
    setUsername('');
    setPassword('');
    setNotifMessage({message: `${result.name} has successfully login`,style: 'success'});
    setTimeout(()=>{
      setNotifMessage(null);
    },3000)
    }else {
      setNotifMessage({message:'wrong username or password',style: 'fail'});
      setTimeout(()=>{
        setNotifMessage(null)
      },3000)
    }
    console.log(user);
  }

  const handleLogout=()=>{
    window.localStorage.removeItem('loggedInUser');
    setUser(null)
    setNotifMessage({message: `logout successful`,style: 'success'})
    setTimeout(()=>{
      setNotifMessage(null);
    },3000)
  }


  const handleCreateNote=async(title,author,url)=>{
    console.log(title,author,url)
    const result= await blogService.create({title,author,url})
    console.log(result);
    // setBlogs(blogs.concat(result)) //we might need to fetch all of the blogs again so the users are set properly by mongoose
    setBlogs(await fetchData())
    setNotifMessage({message: `a new blog ${result.title} by ${result.author} added`,style: 'success'})
    blogFormRef.current.toggleVisibility()
    setTimeout(()=>{
      setNotifMessage(null);
    },3000)
  }

  const handleLikeBlog=async(blogId)=>{
    const result=await blogService.update(blogId);
    console.log(result);
  }

  const handleDeleteBlog=async(blogId)=>{
      const result=await blogService.deleteBlog(blogId);
      console.log(result);
      setBlogs(blogs.filter((blog)=>{
        return blog.id!==blogId
       }))
  }

  useEffect(()=>{
    async function fetchData(){
      let blogs=await blogService.getAll();
      blogs.sort((a,b)=>{
        return b.likes-a.likes
      })
      setBlogs(blogs);
    }
    fetchData();
  }, [])

  useEffect(()=>{
    const loggedInUser=window.localStorage.getItem("loggedInUser");
    if(loggedInUser){
      setUser(JSON.parse(loggedInUser))
      blogService.setToken(JSON.parse(loggedInUser).token)
    }
  },[])


  if(user===null){
    return(
      <div>
        <h2>log in to application</h2>
        {notifMessage!==null
        ?<div id={notifMessage.style} className='notification'>{notifMessage.message}</div>
        :<></>}
        <LoginForm handleLogin={handleLogin} username={username} setUsername={setUsername} 
        password={password} setPassword={setPassword}/>
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      {notifMessage!==null
        ?<div id={notifMessage.style} className='notification'>{notifMessage.message}</div>
        :<></>}
      <p>{user.name} logged in username:{user.username}<button id="logout-button" onClick={handleLogout}>logout</button></p>
      <Toggable buttonName="create" ref={blogFormRef}>
        <CreateNoteForm handleCreateNote={handleCreateNote}/>
      </Toggable>
      {blogs.map(blog=><Blog key={blog.id} blog={blog} handleLikeBlog={handleLikeBlog} 
        handleDeleteBlog={handleDeleteBlog} user={user}/>
      )}
    </div>
  )
}

export default App