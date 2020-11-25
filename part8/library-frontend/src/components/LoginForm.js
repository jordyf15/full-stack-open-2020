import React, { useState,useEffect } from 'react';
import {LOGIN} from '../queries';
import {useMutation} from '@apollo/client';

const LoginForm=({show,setToken})=>{
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const [login,loginResult]=useMutation(LOGIN)

    useEffect(()=>{
        if(loginResult.data){
            const token = loginResult.data.login.value;
            setToken(token);
            localStorage.setItem('userToken',token);
        }
    },[loginResult.data,setToken]);

    if(!show){
        return null;
    }


    const handleLogin=async (event)=>{
        event.preventDefault();
        login({variables: {username: name,password}})
    }
    return(
        <div>
            <form onSubmit={handleLogin}>
                <div>
                name <input value={name} onChange={({target})=>setName(target.value)}/>
                </div>
                <div>
                password <input value={password} onChange={({target})=>setPassword(target.value)}/>
                </div>
                <button type='submit'>login</button>
            </form>
        </div>
    )
}

export default LoginForm;