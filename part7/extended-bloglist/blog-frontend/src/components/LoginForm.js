import React from 'react';
import {Button} from 'react-bootstrap'

const LoginForm =({handleLogin,username,setUsername,password,setPassword})=>{
return(
    <form onSubmit={handleLogin} className='content'>
        Username
        <input id="login-username" value={username} onChange={({target})=>{setUsername(target.value)}}/><br/>
        Password
        <input id="login-password" value={password} onChange={({target})=>{setPassword(target.value)}}/><br/>
        <Button id="login-button"type='submit'>Login</Button>
    </form>
)

}
export default LoginForm