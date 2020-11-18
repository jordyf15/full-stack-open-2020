import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useField} from '../hooks/index';

const CreateNew = (props) => {
    // const [content, setContent] = useState('')
    // const [author, setAuthor] = useState('')
    const content=useField('text');
    const author=useField('text');
    const info=useField('text');
    const history=useHistory()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      props.addNew({
        content:content.value,
        author:author.value,
        info:info.value,
        votes: 0
      })
      history.push('/')
    }

    const resetField=(e)=>{
      e.preventDefault()
      content.clear();
      author.clear();
      info.clear();
    }
  
    return (
      <div>
        <h2>create a new anecdote</h2>
        <form onSubmit={handleSubmit}>
          <div>
            content
            <input {...content} clear={null} name='content'/>
          </div>
          <div>
            author
            <input name='author'{...author} clear={null}/>
          </div>
          <div>
            url for more info
            <input name='info' {...info} clear={null}/>
          </div>
          <button type='submit'>create</button><button type='button' onClick={resetField}>reset</button>
        </form>
      </div>
    )
  
  }

  export default CreateNew