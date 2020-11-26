
import React, { useEffect, useState } from 'react'
import Authors from './components/Authors'
import Books from './components/Books'
import NewBook from './components/NewBook'
import LoginForm from './components/LoginForm'
import Recommendation from './components/Recommendation';
import {BOOK_ADDED,ALL_BOOKS} from './queries';
import {useSubscription,useApolloClient} from '@apollo/client'
const App = () => {
  const [page, setPage] = useState('authors');
  const [token,setToken]=useState(null);
  const [user,setUser]=useState(null);
  const client=useApolloClient();

  const logout=()=>{
    localStorage.removeItem('userToken');
    setPage('authors')
    setToken(null)
  }

  useEffect(()=>{
    setToken(localStorage.getItem('userToken'))
  },[])

  const updateCacheWith=(addedBook)=>{
    const includedIn=(set,object)=>set.map(book=>book.title).includes(object.title)

    const dataInStore=client.readQuery({query: ALL_BOOKS})
  
    if(!includedIn(dataInStore.allBooks,addedBook)){
      client.writeQuery({
        query: ALL_BOOKS,
        data: {allBooks: dataInStore.allBooks.concat(addedBook)}
      })
    }
  }

  useSubscription(BOOK_ADDED,{
    onSubscriptionData:({subscriptionData})=>{
      const addedBook=subscriptionData.data.bookAdded;
      window.alert(`a book titled ${addedBook.title} by ${addedBook.author.name} is added`)
      updateCacheWith(addedBook)
    }
  })

  return (
    <div>
      <div>
        <button onClick={() => setPage('authors')}>authors</button>
        <button onClick={() => setPage('books')}>books</button>
        {!token?<button onClick={()=>setPage('login')}>login</button>:<>
        <button onClick={() => setPage('add')}>add book</button>
        <button onClick={()=>setPage('recommendation')}>recommend</button>
        <button onClick={()=>logout()}>logout</button>
        </>}
        
      </div>
      <LoginForm show={page==='login'} setToken={setToken}/>
      <Authors
        show={page === 'authors'}
      />

      <Books
        show={page === 'books'}
      />

      <NewBook
        show={page === 'add'}
        user={user}
        updateCacheWith={updateCacheWith}
      />

      <Recommendation show={page==='recommendation'} setUser={setUser} token={token}/>

    </div>
  )
}

export default App