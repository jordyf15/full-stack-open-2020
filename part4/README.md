# Full-Stack-Open 2020 Part 4
In part 4 we will learn about writing unit and integration tests for the backend and also implementing user authentication and authorization. In this part we will build a new application which is a blog list application. We will be using jest for our testing library.    

Part 4 consist of 4 sections:  
1. Structure of backend application, introduction to testing.  
In this section we will learn to modify our project's structure to follow Node.js best practices. After that we will learn how to make a simple unit test as an introduction to automated testing.
2. Testing the backend.  
In this section we will learn to prepare our testing environment by seperating modes for development and testing which will run using different databases, how to prepare the database for each test, how to use the async/await, and grouping test with describe block. 
3. User administration.  
In this section we will learn how to make references across collections in mongoDB and how to use the populate function from mongoose library which will do a join query for more than one collection.
4. Token authentication.  
In this section we will learn how to implement a token based authentication which when user managed to login successfully they will be given signed token which will be required for posting or deleting a blog later on.

## Live Demo on Repl
https://Full-Stack-Open-Part4-BlogList.jordyf15.repl.co

Note that the live demo here is the application that only has features built in part 4 which is mostly api for the backend and testing(there are no front end).
## Technologies Used:
1. express version ^4.17.1
2. bcrypt version ^5.0.0
3. cors version ^2.8.5
4. dotenv version ^8.2.0
5. jsonwebtoken version ^8.5.1
6. lodash version ^4.17.20
7. mongoose version ^5.10.11
8. mongoose-unique-validator version ^2.0.3
9. cross-env version ^7.0.2
10. jest version ^26.6.1
11. nodemon version ^2.0.6
12. supertest version ^6.0.0

## Exercises Development:
1. Exercises 4.1 or Step 1:  
In step 1 we have to turn the application given in the picture of the exercise to a functioning npm project.
2. Exercises 4.2 or Step 2:  
In step 2 we have to refactor the application's structure as shown in the tutorial.
3. Exercises 4.3 or Step 3:  
In step 3 we have to create a `dummy` function that accept a blog list as parameter and always return 1. Then we have to check if our test configuration work by testing the dummy function.
4. Exercises 4.4 or Step 4:  
In step 4 we have to create a `totalLikes` function that accept a blog list as parameter and return the sum of likes of all blogs. Then we need to write a test for the function.
5. Exercises 4.5 or Step 5:  
In step 5 we have to create a `favoriteBlog` function that accept a blog list as parameter and return the blog with most likes. Then we need to write a test for that function.
6. Exercises 4.6 or Step 6:  
In step 6 we have to create a `mostBlogs` function that accept a blog list as parameter and return the author with the most blogs and his/her blog count. Then we need to write a test for that function.
7. Exercises 4.7 or Step 7:  
In step 7 we have to create a `mostLikes` function that accept a blog list as parameter and return the author whose blog posts has the largest amount of likes. Then we need to write a test for that function.
8. Exercises 4.8 or Step 8:  
In step 8 we have to write a test that makes an http get request to the /api/blogs url which verify the application if its return the correct amount of blog posts in the JSON format. After that refactor our route handler to use the async/await rather than the then.
9. Exercises 4.9 or Step 9:  
In step 9 we have to write a test that verify the unique identifier property of the blog is named id, by default the database names the property _id but the toJSON method should convert it. So we should create a toJSON method for blog schema.
10. Exercises 4.10 or Step 10:  
In step 10 we have to write a test that makes an http post request to the /api/blogs url which will successfully creates a new blog post. This test will also verify the total number of blogs in database is increased by one and the content of the posted blog is saved correctly in the database.
11. Exercises 4.11 or Step 11:  
In step 11 we have to write a test that verify if the likes property is missing from the post request to /api/blogs url. Then it will default to the value 0. After that we also need to refactor our route handler so it passes the test.
12. Exercises 4.12 or Step 12:  
In step 12 we have to write a test that verify if the title and url property is missing from the post request to /api/blogs url then the backend responds to the request with status code 400. After that we also need to refactor our route handler so it passes the test.
13. Exercises 4.13 or Step 13:  
In step 13 we have to create a route handler to handle deletion of a single blog using the async/await syntax. Creating a test for it is optional.
14. Exercises 4.14 or Step 14:  
In step 14 we have to create a route handler to handle updating of a single blog using the async/await syntax. Creating a test for it is optional.
15. Exercises 4.15 or Step 15:  
In step 15 we have to create a route handler to handle a creation of new user by doing a post request to /api/users.
16. Exercises 4.16 or Step 16:  
In step 16 we have to add restriction to creating a new user by adding requirements to both username and password. After that we have to refactor the route handler so it will return the proper status code and message if any of the requirement is not met. We'll also need to create a test to verify if invalid users are not created and the backend alo return the proper status code and error message.
17. Exercises 4.17 or Step 17:  
In step 17 we have to implement a feature so that the blog contains the information of the user who created it and for the user contains the information of blog they created. This can be done with the populate function and also altering the blog schema.
18. Exercises 4.18 or Step 18:  
In step 18 we have to implement a token-based authentication.
19. Exercises 4.19 or Step 19:  
In step 19 we have to modify the adding new blog route handler if a valid toke is sent with the http post request in the authorization header, the user identified by the token will be the creator of that blog.
20. Exercises 4.20 or Step 20:  
In step 20 we have to move the function we use to ge the token from the request header to a middle ware.
21. Exercises 4.21 or Step 21:  
In step 21 we have to modify our delete route handler so a blog can only be deleted by it's creator.
22. Exercises 4.22 or Step 22:  
In step 22 we have to fix our test which was broken due to adding the token based authentication features.



