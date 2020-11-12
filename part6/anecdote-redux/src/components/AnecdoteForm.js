import React from 'react';
import {createAnecdote} from '../reducers/anecdoteReducer';
import {setNotification} from '../reducers/notificationReducer';
import {connect} from 'react-redux';
const AnecdoteForm=(props)=>{

    const handleSubmit=async (event)=>{
        event.preventDefault();
        const content=event.target.content.value;
        props.createAnecdote(content)
        props.setNotification(`new anecdote ${content}`,5)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input name='content'/>
            <button type='submit'>create</button>
        </form>
    )

}

const mapDispatchtoProps={
    createAnecdote,setNotification
}
const connectedAnecdoteForm=connect(null,mapDispatchtoProps)(AnecdoteForm)
export default connectedAnecdoteForm;