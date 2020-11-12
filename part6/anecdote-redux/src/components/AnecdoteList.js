import React from 'react';
import {connect} from 'react-redux';
import {voteAnecdote} from '../reducers/anecdoteReducer';
import {setNotification}from '../reducers/notificationReducer';

const Anecdote=({anecdote,handleVote})=>{
return(
    <div>
        <div>
        {anecdote.content}
        </div>
        <div>
        has {anecdote.votes}
        <button onClick={handleVote}>vote</button>
        </div>
    </div>
)
}

const AnecdotesList=(props)=>{
    // const anecdotes=useSelector(state=>{
    //     const sortedAnecdote=[...state.anecdotes]
    //     sortedAnecdote.sort((a,b)=>a.votes<b.votes?1:-1);
    //     return sortedAnecdote.filter(anecdote=>anecdote.content.includes(state.filter))
    // });
    const anecdotes=props.anecdotes.sort((a,b)=>a.votes<b.votes?1:-1);
    // const dispatch=useDispatch();

    const handleVote=(id,content)=>{
        props.voteAnecdote(id);
       props.setNotification(`you voted ${content}`,5);
    }

    return(
        <div>
        {anecdotes.map(anecdote =>
            <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={()=>{handleVote(anecdote.id,anecdote.content)}}/>
          )}
        </div>
    )
}
const mapStatetoProps=(state)=>{
    return{
        anecdotes: state.anecdotes.filter(anecdote=>anecdote.content.includes(state.filter))
    }
}
const mapDispatchtoProps={
    voteAnecdote,
    setNotification
}
const connectedAnecdoteList=connect(mapStatetoProps,mapDispatchtoProps)(AnecdotesList)
export default connectedAnecdoteList