import {gql} from '@apollo/client';

export const BOOK_DETAILS=gql`
fragment BookDetails on Book{
    title
        genres
        author{
            name
            id
        }
        published
}
`

export const ALL_AUTHOR=gql`
query{
    allAuthors{
        name
        born
        bookCount
    }
}
`

export const ALL_BOOKS=gql`
query{
    allBooks{
        ...BookDetails
    }
}
${BOOK_DETAILS}
`
export const ADD_BOOK=gql`
mutation addNewBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!){
    addBook(
        title: $title,
        author: $author,
        published: $published,
        genres: $genres
    ){
       ...BookDetails
    }
}
${BOOK_DETAILS}
`
export const EDIT_AUTHOR=gql`
mutation editAuthorBorn($name: String!, $setBornTo: Int!){
    editAuthor(
        name: $name,
        setBornTo: $setBornTo
    ){
        name
    }
}
`

export const LOGIN=gql`
mutation login($username: String!, $password: String!){
    login(username: $username, password: $password){
        value
    }
}
`

export const USERME=gql`
query me($token: String){
    me(token: $token){
        username
        favoriteGenre
    }
}
`

export const RECOMMEND_BOOK=gql`
query recommendBooks($genre: [String!]!){
    allBooks(genre: $genre){
        title
        genres
        author{
            name
            id
        }
        published
    }
}
`

export const BOOK_ADDED=gql`
subscription{
    bookAdded{
      ...BookDetails
    }
}
${BOOK_DETAILS}
`