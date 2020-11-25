import React, { useEffect } from 'react';
import {useQuery,useLazyQuery} from '@apollo/client';
import {USERME,RECOMMEND_BOOK} from '../queries';

const Recommendation=({show,setUser,token})=>{
    const getUser=useQuery(USERME)
    const [getBooks,books]=useLazyQuery(RECOMMEND_BOOK);
    useEffect(()=>{
      if(getUser.data && token){
        console.log(getUser.data)
        if(getUser.data.me){
          getBooks({variables: {genre:[getUser.data.me.favoriteGenre]}})
          setUser(getUser.data.me.favoriteGenre)
        }
      }
    },[getUser.data,getBooks,setUser,token])
    if(!show){
        return null
    }

    if(!getUser.data || !books.data){
        return <div>loading...</div>
    }

    return(
        <div>
            <h2>recommendations</h2>
            books in your favorite genre <b>{getUser.data.me.favoriteGenre}</b>
            <table>
        <tbody>
          <tr>
            <th></th>
            <th>
              author
            </th>
            <th>
              published
            </th>
          </tr>
          {books.data.allBooks.map(book=><tr key={book.title}>
                <td>{book.title}</td>
                <td>{book.author.name}</td>
                <td>{book.published}</td>
              </tr>)}
        </tbody>
      </table>
        </div>
    )
}

export default Recommendation;