import React from 'react';
import ReactDOM from 'react-dom';

const Button=({handleClick,name})=>{
  return (
    <button onClick={handleClick}>{name}</button>
  )
}

const Anecdote=({anecdote,vote})=>{
  return (
    <>
    {anecdote}.<br/>
    has {vote} votes
    </>
  )
}

const App =(props)=>{
  const [selected,setSelected]=React.useState(0);
  const [votes, setVotes]=React.useState(new Array(props.anecdotes.length).fill(0));

  const changeAnecdote=()=>setSelected(Math.floor(Math.random() *anecdotes.length));

  const voteAnecdote=()=>{
    const newVotes=[...votes];
    newVotes[selected]+=1;
    setVotes(newVotes);
    console.log(selected+1,newVotes);
  }

  const getMostVoteIndex=()=>{
    return votes.indexOf(Math.max(...votes));
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={props.anecdotes[selected]} vote={votes[selected]}/>
      <br/>
      <Button handleClick={voteAnecdote} name="vote"/>
      <Button handleClick={changeAnecdote} name="next anecdote"/>

      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={props.anecdotes[getMostVoteIndex()]} vote={votes[getMostVoteIndex()]}/>
    </div>
  )

}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(<App anecdotes={anecdotes}/>, document.getElementById('root'));
