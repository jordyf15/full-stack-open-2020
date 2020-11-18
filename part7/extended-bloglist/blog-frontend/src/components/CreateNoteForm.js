import React ,{useState}from 'react';

const CreateNoteForm=({handleCreateNote})=>{
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const [url,setUrl]=useState('');

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(title,author,url)
        handleCreateNote(title,author,url);
    }

   return(
    <form onSubmit={handleSubmit}>
        title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        <input id="title" value={title} onChange={({target})=>{setTitle(target.value)}}/><br/>
        author :
        <input id="author" value={author} onChange={({target})=>{setAuthor(target.value)}}/><br/>
        url&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        <input id="url" value={url} onChange={({target})=>{setUrl(target.value)}}/><br/>
        <button id='new-blog-button'type="submit">create</button>
    </form>
   )
}

export default CreateNoteForm