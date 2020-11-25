  
import React from 'react';
import {useQuery} from '@apollo/client';
import {ALL_AUTHOR} from '../queries';
import SetAuthorForm from './SetAuthorForm';

const Authors = (props) => {

  const authors=useQuery(ALL_AUTHOR);

  if (!props.show) {
    return null
  }
  if(!authors.data){
    return (<div>loading...</div>)
  }
  

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              born
            </th>
            <th>
              books
            </th>
          </tr>
          {authors.data.allAuthors.map(a =>
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
        
          )}
        </tbody>
      </table>
      <SetAuthorForm authors={authors.data.allAuthors}/>
    </div>
  )
}

export default Authors
