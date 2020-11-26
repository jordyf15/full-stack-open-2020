# Part 8
In this part of the course we will be focus on learning GraphQL which is an alternative to REST for browser and server communication. It was developed by Facebook.  
  
This part consist of 5 sections:  
1. GraphQL-Server:  
In this section we will learn about the main principle of GraphQL like schemas, resolvers, queries and mutations. We will implement a working graphQL server using the library Apollo-server. 
2. React and GraphQL:  
In this section we will learn how to connect our react application to our graphql server using the library apollo-client. We will also learn how to make queries and mutation from the front end and also about cache.
3. Database and user administration:  
In this section we will start using a database for our graphql server (before we just save it into a variable in the server). We also learn about context which can be used to share an object for all resolvers as their third parameter.
4. Login and updating the cache:  
In this section we will learn about how to update the cache using refetchqueries and also how to read and write the cached query.
5. Fragments and subscriptions:  
In this section we will learn about fragments which can be used to simplify and shorten queries that return similar results. We will also learn about subscription which can be used to subscribe clients to updates about changes in the server. This can be used to make the client do something if a certain changes happens in the server.

## Live Demo on Repl
https://FullStackOpen2020-Library.jordyf15.repl.co
  
Note:  
Since this part of the course focuses on learning graphql, the application does not have a complete feature such as creating a user through the front end and also user will share the same password `nepnep` to simplify things. So please use an already created user which's details are:  
username: neptune  
password: nepnep  

## Technologies Used
1. React version ^16.12.0 (create-react-app)
2. @apollo/client version ^3.2.9
3. apollo-link-context version ^1.0.20
4. graphql version ^15.4.0
5. subscriptions-transport-ws version ^0.9.18
6. apollo-server version ^2.19.0
7. dotenv version ^8.2.0
8. jsonwebtoken version ^8.5.1
9. mongoose version ^5.10.15
10. mongoose-unique-validator version ^2.0.3

## Exercises Development
### Exercises 8.1-8.7 (Backend)
1. Exercise 8.1 or Step 1:  
In step 1 we can use [this](https://github.com/fullstack-hy2020/misc/blob/master/library-backend.js) as a starting point for our project. First we will implement queries for bookCount and authorCount which will return the number of books and number of authors.
2. Exercise 8.2 or Step 2:  
In step 2 we have to implement a query for allBooks which will return the details of all books.
3. Exercise 8.3 or Step 3:  
In step 3 we have to implement a query for allAuthors which will return the details of all authors which response's will include a field called bookCount which contain te number of books written by that author.
4. Exercise 8.4 or Step 4:  
In step 4 we have to modify the allBooks query so that user can give an optional parameter author which the response will return book written only by that author.
5. Exercise 8.5 or Step 5:  
In step 5 we have to modify the allBooks query so that user can give an optional parameter genre which the response will return books that have that genre.
6. Exercise 8.6 or Step 6:  
In step 6 we have to implement a addBook mutation which will saved a book to the server. If the author never existed before in the server than it will be automatically added.
7. Exercise 8.7 or Step 7:  
In step 7 we have to implement a editAuthor mutation which can be used to change the birth year of an author.  

### Exercises 8.8-8.12 (Frontend)  

8. Exercise 8.8 or Step 8:  
In step 8 we can use [this](https://github.com/fullstack-hy2020/library-frontend) as a starting point for our front end. Here we need to implement an Authors view to show the details of all authors.
9. Exercise 8.9 or Step 9:  
In step 9 we have to implement a Books view to show on a page all other details of all books except their genres.
10. Exercise 8.10 or Step 10:  
In step 10 we have to implement a functionality to add new books to our application and also make sure that both Authors and Books view are updated when a new book is added.
11. Exercise 8.11 or Step 11:  
In step 11 we have to implement a functionality to set birth year of an author and also make sure that the Authors view are updated when the birth year are set.
12. Exercise 8.12 or Step 12:  
In step 12 we have to alter the birth year form so that a birth year can be set only for an existing author.  

### Exercises 8.13-8.16 (Backend)  

13. Exercise 8.13 or Step 13:  
In step 13 we have to change our application so that it get and saved the data to the database.
14. Exercise 8.14 or Step 14:  
In step 14 we have to fix all of the queries and mutations so that it work again.
15. Exercise 8.15 or Step 15:  
In step 15 we have to implement error handling for database validation so that it throws an UserInputError with a suitable error message when an error happened.
16. Exercise 8.16 or Step 16:  
In step 16 we have to add user management to the application by expanding our schema, create resolvers for query me and resolvers for mutation createUser and login. And also make the mutations addBook and editAuthor possible only if the request includes a valid token.  

### Exercises 8.17-8.22 (Frontend)  

17. Exercise 8.17 or Step 17:  
In step 17 we have to fix the list of all books which was broken due to changes in the backend.
18. Exercise 8.18 or Step 18:  
In step 18 we have to implement a login functionality and fix the mutations that was broken due to changes in the backend.
19. Exercise 8.19 or Step 19:  
In step 19 we have to implement a filter functionality by genre which based on all existing genres as options.
20. Exercise 8.20 or Step 20:  
In step 20 we have to implement a view which shows all the books based on the logged in user's favourite genre.
21. Exercise 8.21 or Step 21:  
In step 21 we have to alter the filter books in recommendation page using a query (if in step 20 we use react) to the server.
22. Exercise 8.22 or Step 22:  
In step 22 we have to ensure that the book recommendation view is updated if a new book is added.  

### Exercises 8.23-8.26 (Frontend & Backend)  

23. Exercise 8.23 or Step 23:  
In step 23 we have to implement a subscription book added in the backend, which returns the details of all new books to its subscribers.  
24. Exercise 8.24 or Step 24:  
In step 24 we have to implement a subscriptions in the client and subscribe to bookAdded, which when new books are added, we will notify the user with the window.alert function.
25. Exercise 8.25 or Step 25:  
In step 25 we have to make sure the application's view updated when the server notifies about new books. Which can be tested by using two browser tabs and adding a new book in one tab should update the view in both tabs.
26. Exercise 8.26 or Step 26:  
In step 26 we have solve the n+1 problem for the allAuthors query.