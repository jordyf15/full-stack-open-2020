import React, { useEffect } from 'react'
import AnecdotesList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import Filter from './components/Filter';
import {initAnecdote} from './reducers/anecdoteReducer';
// import anecdoteService from './services/anecdotes';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(initAnecdote())
  },[dispatch])
  return (
    <div>
      <h2>Anecdotes</h2>
      <Notification/>
      <Filter/>
      <AnecdotesList/>
      <h2>create new</h2>
      <AnecdoteForm/>
    </div>
  )
}

export default App