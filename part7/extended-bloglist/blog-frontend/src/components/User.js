import React from 'react';
import { useSelector } from 'react-redux';
import {Link} from 'react-router-dom';
import {Table} from 'react-bootstrap'

const User =()=>{
    const userList=useSelector(state=>state.userList);

    return (
        <div className='content'>
            <h2>Users</h2>
            <Table hover >
                <tbody>
                <tr>
                    <th></th>
                    <th>blogs created</th>    
                </tr>
            {userList.map(user=>
                <tr key={user.name}>
                    <td><Link to={`/users/${user.id}`}>{user.name}</Link></td> 
                    <td>{user.blogs.length}</td>
                </tr>)}
                </tbody>
            </Table>
        </div>
    )
}

export default User;