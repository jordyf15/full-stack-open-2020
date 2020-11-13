# Anecdote-Redux
This application will be developed through exercises 6.3-6.21 in part 6. This application is a new version of anecdotes application in part 1. The state management will be managed with redux.

## Live Demo on Repl
https://full-stack-open-anecdote-redux.jordyf15.repl.co/

## Technologies Used
1. React version ^16.12.0
2. React-redux version ^7.1.3
3. Redux version ^4.0.5
4. Redux-thunk version ^2.3.0
5. Axios version ^0.21.0
6. Json-server version ^0.16.2
7. Redux-devtools-extension version ^2.13.8

## Exercises Development
1. Exercise 6.3 or Step 1:  
In step 1 we have to clone the base project from this [repository](https://github.com/fullstack-hy2020/redux-anecdotes). Then we have to implement the functionality for voting anecdotes, the votes must be safe to a redux store.
2. Exercise 6.4 or Step 2:  
In step 2 we have to implement the functionality for adding new anecdotes.
3. Exercise 6.5 or Step 3:  
In step 3 we have to make sure that the anecdotes are ordered by the number of votes.
4. Exercise 6.6 or Step 4:  
In step 4 we have to separate the creation of action-objects to action creator-functions and place them in the src/reducers/anecdoteReducer.js file.
5. Exercise 6.7 or Step 5:  
In step 5 we have to separate the creation of new anecdotes and all of its logic into its own component called AnecdoteForm.
6. Exercise 6.8 or Step 6:  
In step 6 we have to separate the rendering of the anecdote list into its own component called AnecdoteList and also the logic for voting anecdotes into this component.
7. Exercise 6.9 or Step 7:  
In step 7 we have to start using ReactDev tools and also move the redux store into its own file store.js.
8. Exercise 6.10 or Step 8:  
In step 8 we have to create the notificationReducer and combine it with the others with combine and also make the notification component to display the initial value set by the notificationReducer.
9. Exercise 6.11 or Step 9:  
In step 9 we have to extend the application so that it uses the Notification component to display a message for the duration of five seconds when the user votes for an anecdote or creates a new anecdote.
10. Exercise 6.12 or Step 10:  
In step 10 we have to create the filterReducer and Filter component and implement it for the filtering functionality of the application.
11. Exercise 6.13 or Step 11:  
In step 11 we have to implement the backend with json-server and also make the application to fetch the anecdote when it launches.
12. Exercise 6.14 or Step 12:  
In step 12 we have to modify the creation of new anecdotes, such that the anecdotes are stored in the backend.
13. Exercise 6.15 or Step 13:  
In step 13 we have to modify the initialization of redux-store to happen using asynchronous action creators with the redux-thunk library.
14. Exercise 6.16 or Step 14:
In step 14 we have to modify the creation of a new anecdote to happen using asynchronous action creators with the redux-thunk library. 
15. Exercise 6.17 or Step 15:  
In step 15 we have to make sure that voting make changes to the backend also happen using asynchronous action creators with the redux-thunk library.
16. Exercise 6.18 or Step 16:  
In step 16 we have to refactor our creation of notification so that it can display and hide the notification with only one action creator.
17. Exercise 6.19 or Step 17:  
In step 17 we have to modify the AnecdoteList component so that is uses the connect function instead of useSelector and useDispatch to access the redux store.
18. Exercise 6.20 or Step 18:  
In step 18 we have to modify the Filter and AnecdoteForm components so that is uses the connect function instead of useSelector and useDispatch to access the redux store.
19. Exercise 6.21 or Step 19:  
In step 19 we have to fix the bug in displaying and hiding notification so that if multiple notification created the last one will dissapear 5 seconds after its creation.

