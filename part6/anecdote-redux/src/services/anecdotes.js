import axios from 'axios';

const baseUrl='http://localhost:3001/anecdotes';

const getAll=async()=>{
    const res = await axios.get(baseUrl);
    return res.data;
}

const postAnecdote=async(content)=>{
    const objectAnecdote={
        content,
        votes:0
    }
    const res=await axios.post(baseUrl,objectAnecdote);
    return res.data;
}

const voteAnecdote=async(id)=>{
    let votedAnecdote=await axios.get(`${baseUrl}/${id}`);
    votedAnecdote=votedAnecdote.data;
    votedAnecdote.votes+=1;
    const res = await axios.put(`${baseUrl}/${id}`,votedAnecdote);
    return res.data;
}

export default {
    getAll,postAnecdote,voteAnecdote
}