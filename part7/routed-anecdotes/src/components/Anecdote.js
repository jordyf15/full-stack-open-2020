import React from 'react';

const Anecdote=({anecdote})=>(
    <div>
      <h2>{anecdote.content} by {anecdote.author}</h2>
      has {anecdote.votes} votes<br/><br/>
      for more info see <a href={anecdote.info} rel="noopener noreferrer" target='_blank'>{anecdote.info}</a><br/><br/>
    </div>
  )

export default Anecdote;