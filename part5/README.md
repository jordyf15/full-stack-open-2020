# Full Stack Open 2020 part 5
In part 5 we will learn about ways to testing react apps. Here we will also implement token based authentication to our front end, so user can login to our application.

Part 5 consists of 4 sections:  
1. Login in frontend:  
In this section we will implement the login feature to our front end and also how to save the user detail to the browser's local storage, so that user doesn't have to login everytime they use the application.  
2. props.children and propTypes:  
In this section we will learn about component's childrens or props.children which are the components that was defined between opening and closing tag of a component. Here we will also learn the useRef hook, which allows us to change the state of a child component from it's parent component.
3. Testing React Apps:  
In this section we will learn how to test our frontend or react apps with jest and react-testing-library that will help us to render our react components.
4. End to end -testing:  
In this section we will learn how to do E2E testing using cypress which is a testing method which test the application as a whole both front end and back end also throught the same interface as real users use.

## Live Demo on Repl
https://full-stack-open-2020-part5.jordyf15.repl.co/  
  
Note:  
In the exercises, there is no request to make a create user functionality. Please use the already created user which details are provided below:  
username: jordyf15  
password: jordy123

## Technologies Used
1. React version ^16.12.0
2. React-dom version ^16.12.0
3. React-scripts version 3.3.1
4. prop-types version ^15.7.2
5. Axios version ^0.19.2
6. @testing-library/user-event version ^7.2.1
7. @testing-library/jest-dom version ^4.2.4
8. @testing-library/react version ^9.5.0
9. cypress version ^5.5.0
10. eslint-plugin-jest version ^24.1.0


## Exercises Development
1. Exercises 5.1 or Step 1:  
In step 1 we have to clone the front end application from [here](https://github.com/fullstack-hy2020/bloglist-frontend). Then we have to implement the login functionality to the frontend where the token returned with successful login is saved to the user state of the application. If a user is not logged in then we have to display the login form and if user is logged in then we will display username logged in.
2. Exercise 5.2 or Step 2:  
In step 2 we have to refactor our application so that it save the user after logging in to local storage, so login is permanent. We also have to implement a log out function. 
3. Exercise 5.3 or Step 3:  
In step 3 we have to refactor our application so that only logged in user can add new blogs.
4. Exercise 5.4 or Step 4:  
In step 4 we have to implement notifications about successful and failed operations at the top of the page.
5. Exercise 5.5 or Step 5:  
In step 5 we have to change the new blog form so that it only display when the new blog button is clicked. The new blog form should also close when user created a new  blog.
6. Exercise 5.6 or Step 6:  
In step 6 we have to move our new blog form to it's own component and also move all states required for creating a new blog to this component.
7. Exercise 5.7 or Step 7:  
In step 7 we have to add a button for each blog which when clicked display more details about the blog and the details will be hidden when the buttons are clicked again.
8. Exercise 5.8 or Step 8:  
In step 8 we have to implement the like button functionality which will make a put request to increase the like of the blog.
9. Exercises 5.9 or Step 9:  
In step 9 we have to modify the application so that it list the blog posts by the number of likes it has.
10. Exercise 5.10 or Step 10:  
In step 10 we have to add a new button for deleting blog posts and also implement deleting blog posts feature in the back end. We need to add a confirmation dialog for deleting blog post which can be done with window.confirm().
11. Exercise 5.11 or Step 11:  
In step 11 we have to define propTypes for one of our component in the application.
12. Exercise 5.12 or Step 12:  
In step 12 we have to add ESlint to the project and fix all the linter errors.
13. Exercise 5.13 or Step 13:  
In step 13 we have to make a test which checks that the component displaying a blog renders the blog's title and author, but does not render its url or number of likes by default.
14. Exercise 5.14 or Step 14:  
In step 14 we have to make a test which checks that the blog's url and number of likes are shown when the button controlling the shown details has been clicked.
15. Exercise 5.15 or Step 15:  
In step 15 we have to make a test which ensures that if the like button is clicked twice, the event handler the component received as props is called twice.
16. Exercise 5.16 or Step 16:  
In step 16 we have to make a test for the new blog form that check that the form calls the event handler it received as props with the right details when a new blog is created.
17. Exercise 5.17 or Step 17:  
In step 17 we have to configure cypress to our project and make a test for checking if the application display the login form by default. Before each test the database must be emptied.
18. Exercise 5.17 or Step 18:  
In step 18 we need to make a test for both successful dan failed login attempts. Before each test we must make a new user.
19. Exercise 5.19 or Step 19:  
In step 19 we need to make a test that checks if a logged in user can make a new blog and also check if the created blog is added to the list of all blogs.
20. Exercise 5.20 or Step 20:  
In step 20 we need to make a test that checks if the user can like a blog.
21. Exercise 5.21 or Step 21:  
In step 21 we need to make a test that checks if the user who created the blog can delete the blog while other users can't.
22. Exercise 5.22 or Step 22:  
In step 22 we need to make a test that checks if the blogs are ordered by their likes count descendingly.

