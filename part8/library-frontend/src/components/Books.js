import React,{useState} from 'react'
import {ALL_BOOKS} from '../queries'
import {useQuery} from '@apollo/client'

const Books = (props) => {
  const books=useQuery(ALL_BOOKS)
  const [genre,setGenre]=useState(null)
  

  if (!props.show) {
    return null
  }
  if(!books.data){
    return(<div>loading...</div>)
  }

  const allGenres=[];
  books.data.allBooks.forEach(book=>{
    book.genres.forEach(genre=>{
      if(allGenres.includes(genre)===false){
        allGenres.push(genre);
      }
    })
  })

  return (
    <div>
      <h2>books</h2>
      in genre <b>{genre}</b>
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
          {genre
          ?
            books.data.allBooks.map(a=>a.genres.includes(genre)
            ?<tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author.name}</td>
              <td>{a.published}</td>
            </tr>
            :null
          )
          :
          books.data.allBooks.map(a=><tr key={a.title}>
            <td>{a.title}</td>
            <td>{a.author.name}</td>
            <td>{a.published}</td>
          </tr>
          )
          }
        </tbody>
      </table>
      <div>
        {allGenres.map(genre=><button key={genre} onClick={()=>{setGenre(genre)}}>{genre}</button>)}
        <button key='default' onClick={()=>{setGenre(null)}}>any</button>
      </div>
    </div>
  )
}

export default Books