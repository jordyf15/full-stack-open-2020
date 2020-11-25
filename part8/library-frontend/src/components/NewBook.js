import React, { useState } from 'react'
import {ADD_BOOK,ALL_AUTHOR,RECOMMEND_BOOK} from '../queries'
import {useMutation} from '@apollo/client'

const NewBook = ({show,user,updateCacheWith}) => {
  const [title, setTitle] = useState('')
  const [author, setAuhtor] = useState('')
  const [published, setPublished] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])


  const [addNewBook] = useMutation(ADD_BOOK,{
    refetchQueries:[{query: ALL_AUTHOR},{query: RECOMMEND_BOOK,variables:{genre:[user]}}],
    update:(store,response)=>{
      updateCacheWith(response.data.addBook)
    }
  });

  if (!show) {
    return null
  }

  const submit = async (event) => {
    event.preventDefault()
    
    console.log('add book...')
    addNewBook({variables: {title,author,published: parseInt(published),genres}})

    setTitle('')
    setPublished('')
    setAuhtor('')
    setGenres([])
    setGenre('')
  }

  const addGenre = () => {
    setGenres(genres.concat(genre))
    setGenre('')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          title
          <input
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author
          <input
            value={author}
            onChange={({ target }) => setAuhtor(target.value)}
          />
        </div>
        <div>
          published
          <input
            type='number'
            value={published}
            onChange={({ target }) => setPublished(target.value)}
          />
        </div>
        <div>
          <input
            value={genre}
            onChange={({ target }) => setGenre(target.value)}
          />
          <button onClick={addGenre} type="button">add genre</button>
        </div>
        <div>
          genres: {genres.join(' ')}
        </div>
        <button type='submit'>create book</button>
      </form>
    </div>
  )
}

export default NewBook