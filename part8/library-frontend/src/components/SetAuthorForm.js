import React,{useState} from 'react';
import {useMutation} from '@apollo/client';
import {EDIT_AUTHOR,ALL_AUTHOR} from '../queries';

const SetAuthorForm=({authors})=>{
    const [name,setName]=useState('');
    const [born,setBorn]=useState('');

    const [editAuthorBorn] = useMutation(EDIT_AUTHOR,{
        refetchQueries:[{query: ALL_AUTHOR}]
    }); 

    const submit=(event)=>{
        event.preventDefault()
        editAuthorBorn({variables:{name, setBornTo: parseInt(born)}})

        setName('');
        setBorn('');
    }

    return(
        <div>
            <h2>Set Birthyear</h2>
            <form onSubmit={submit}>
                <select value={name}  onChange={({target})=>setName(target.value)}>
                    <option key='default' disabled hidden></option>
                    {authors.map(author=><option key={author.name} value={author.name}>{author.name}</option>)}
                </select>
                born <input value={born} onChange={({target})=>setBorn(target.value)}/>
                <button type='submit'>update author</button>
            </form>
        </div>
    )
}

export default SetAuthorForm