import anecdoteService from '../services/anecdotes';
export const voteAnecdote=(id)=>{
  return async(dispatch)=>{
    await anecdoteService.voteAnecdote(id);
    dispatch({
      type: 'VOTE',
      data: {id}
    })
  }
}

export const createAnecdote=(content)=>{
  return async(dispatch)=>{
    const newAnecdote=await anecdoteService.postAnecdote(content);
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const initAnecdote=()=>{
  return async(dispatch)=>{
    const anecdotes=await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTE',
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type){
    case 'VOTE':
      return state.map(anecdote=>{
        if(anecdote.id===action.data.id){
          const votedAnecdote={...anecdote,votes: anecdote.votes+1}
          return votedAnecdote;
        }else{
          return anecdote
        }
      })
    case 'NEW_ANECDOTE':
      const newAnecdote=action.data
      return state.concat(newAnecdote);
    case 'INIT_ANECDOTE':
      return action.data;
    default:
      return state;
    }
}

export default reducer