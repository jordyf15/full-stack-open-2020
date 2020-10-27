# Phone Book
This application will be developed through exercises 2.6-2.11 and 2.15-2.20. This application will allow the user to add or change a contact in the backend server and also delete a contact in the backend server. This application will also display a confirmation option when user tries to update or delete a contact, a notification will also be displayed for 5 seconds when user add or update a contact. This application is created with the create-react-app.

## Live Demo
https://full-stack-open-part2-phonebook.jordyf15.repl.co/

## Technologies Used
1. Html
2. Javascript
3. React version ^16.14.0

## Exercises Development
1. Exercises 2.6 or Step 1:  
We can use the displayed code in the page as a starting point. In step 1 we have to add the adding person feature to the application.
2. Exercises 2.7 or Step 2:  
In step 2 we have to prevent the user from adding a person which has already exist in the phone book. When such event happened, we need to issue a warning with alert.
3. Exercises 2.8 or Step 3:  
In step 3 we have to expand the application so that the user can add a phone number also to the phonebook not just the name of the person.
4. Exercises 2.9 or Step 4:  
In step 4 we have to implement a input field that can filter the list of people by name to be shown.
5. Exercises 2.10 or Step 5:  
In step 5 we have to refactor the application by extracting the parts into new components. Such as the filter component, Persons component and et cetera.
6. Exercises 2.11 or Step 6:  
In step 6 we have to make a json file 'db.json' which will be used to store the initial state persons of the phonebook and this db.json file will be used for the json server. After that we need to make the application fetch the data from the json server to be used for the persons state of phonebook.
7. Exercises 2.15 or Step 7:  
In step 7 we have to make the added contact(person and number) are saved to the backend server or in this case our json server.
8. Exercises 2.16 or Step 8:  
In step 8 we have to extract the part of codes that handle the communication with the backend server to it's own module.
9. Exercises 2.17 or Step 9:  
In step 9 we have to add a feature where the user can delete a contact in the phonebook. Before deletion we need to confirm the action by user with a `window.confirm`.
10. Exercises 2.18 or Step 10:  
In step 10 we have to change the feature of adding an existing contact to updating the old number of that contact with the new number. This can be done with a put request.
11. Exercises 2.19 or Step 11:  
In step 11 we have to improve the alert message with adding a notification that will disappear after a few second when user added or changed a contact.
12. Exercises 2.20 or Step 12:  
In Step 12 we need to make a handler error when a user tried to change a contact which was deleted by another user, we also need to display a notification when such event happened.
