const { ApolloServer,UserInputError, gql, AuthenticationError } = require('apollo-server');
require('dotenv').config()
const mongoose= require('mongoose');
const Book = require('./models/book');
const Author = require('./models/author');
const jwt=require('jsonwebtoken');
const User=require('./models/user');
const {PubSub} = require('apollo-server');
const pubsub = new PubSub()

const JWT_SECRET='SECRET_NEPU'

console.log('connecting to ', process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI,({useNewUrlParser:true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false}))
.then(()=>{
  console.log('connected to mongoDB');
})
.catch((err)=>{
  console.log(`error: ${err.message}`);
})

let me =null;

const typeDefs = gql`
type Author{
    name: String!
    id: ID!
    born: Int
    bookCount: Int!
}
type Book{
  title: String!
  published: Int!
  author: Author!
  id: ID!
  genres:[String!]!
}
type User {
  username: String!
  favoriteGenre: String!
  id: ID!
}

type Token {
  value: String!
}

type Subscription{
  bookAdded: Book!
}

  type Query {
      bookCount: Int!
      authorCount: Int!
      allBooks(author: String,genre: [String!]): [Book]!
      allAuthors: [Author!]!
      me: User
  }

  type Mutation{
      addBook(
        title: String!
        author: String!
        published: Int!
        genres: [String!]!
      ): Book
      editAuthor(
          name: String!
          setBornTo: Int!
      ): Author
      createUser(
        username: String!
        favoriteGenre: String!
      ): User
      login(
        username:String !
        password: String!
      ): Token
  }
`

const resolvers = {
  Query: {
      bookCount:async()=>await (await Book.find()).length,
      authorCount:async ()=>await(await Author.find()).length,
      allBooks:async(root,args)=>{
          if(args.genre){
            console.log('genre')
            console.log(args.genre);
              return await Book.find({genres: {$in:args.genre}}).populate('author');
          }
          console.log('none')
          return await Book.find().populate('author');
      },
      allAuthors:async ()=>{
        let authors= await Author.find();
        let books = await Book.find();
        authors.forEach(author=>{
          let bookCount=0;
          books.forEach(book=>{
            if(String(book.author)===String(author.id)){
              bookCount++;
            }
          })
          console.log(bookCount)
          author.bookCount=bookCount
        })
        // const authorWithBookCount = authors.map(async(author)=>{
        //   return (await Book.find({author: author.id})).length
        // })
        // const result=await Promise.all(authorWithBookCount.map(async(bookcount)=>{
        //     return await bookcount
        //   }));
        //   authors=authors.map((author,index)=>{
        //     return{name: author.name,id: author.id,born: author.born, bookCount: result[index]}
        //   })
        return authors;
        },
        me: (root,args,context)=>{
          return context.currentUser
        }
  },
  Mutation:{
      addBook: async(root,args,{currentUser})=>{
        if(!currentUser){
          throw new AuthenticationError('not authorized')
        }
          let bookAuthor=await Author.findOne({name: args.author})
          if(bookAuthor===null){
            const newAuthor= new Author({name: args.author})
            await newAuthor.save();
            const newBook=new Book ({...args,author: newAuthor._id});
            try{
              await newBook.save();
            }catch(err){
              throw new UserInputError(err.message,{
                invalidArgs: args
              })
            }
            const result=await newBook.populate('author');
            pubsub.publish('BOOK_ADDED',{bookAdded: result})
            return result;
          }else{
            const newBook=new Book ({...args,author: bookAuthor._id});
            try{
              await newBook.save();
            }catch(err){
              throw new UserInputError(err.message,{
                invalidArgs: args
              })
            }
            const result=await Book.findOne({title: newBook.title}).populate('author')
            console.log(result)
            pubsub.publish('BOOK_ADDED',{bookAdded: result})
            return result;
          }
      },
      editAuthor:async(root,args,{currentUser})=>{
        if(!currentUser){
          throw new AuthenticationError('not authenticated')
        }
          const editedAuthor= await Author.findOne({name: args.name});
          editedAuthor.born=args.setBornTo;
          try{
            await editedAuthor.save();
          }catch(err){
            UserInputError(err.message,{
              invalidArgs: args
            })
          }
          return editedAuthor;
      },
      createUser: async(root,args)=>{
        const newUser= new User({
          ...args
        })
        try{
          await newUser.save();
        }catch(err){
          throw new UserInputError(err.message,{
            invalidArgs: args
          })
        }
        return newUser;
      },
      login:async(root,args)=>{
        const user= await User.findOne({username: args.username});
      

        if(!user || args.password!=='nepnep'){
          throw new UserInputError('wrong credentials')
        }

        const userForToken={
          username: user.username,
          id: user._id
        }

        return{ value: jwt.sign(userForToken,JWT_SECRET)}
      }
  },
  Subscription:{
    bookAdded: {
      subscribe:()=>pubsub.asyncIterator(['BOOK_ADDED'])
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context:async({req})=>{
    const auth= req? req.headers.authorization:null;
    if(auth && auth.toLowerCase().startsWith('bearer ')){
      const decodedToken=jwt.verify(
        auth.substring(7),JWT_SECRET
      )
      const currentUser=await User.findById(decodedToken.id);
      return {currentUser}
    }
  }
})

server.listen().then(({ url ,subscriptionsUrl}) => {
  console.log(`Server ready at ${url}`)
  console.log(`listening to ${subscriptionsUrl}`);
})