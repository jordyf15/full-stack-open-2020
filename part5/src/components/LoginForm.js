import React from 'react';

const LoginForm =({handleLogin,username,setUsername,password,setPassword})=>{
return(
    <form onSubmit={handleLogin}>
        Username
        <input id="login-username" value={username} onChange={({target})=>{setUsername(target.value)}}/><br/>
        Password
        <input id="login-password" value={password} onChange={({target})=>{setPassword(target.value)}}/><br/>
        <button id="login-button"type='submit'>Login</button>
    </form>
)

}
export default LoginForm