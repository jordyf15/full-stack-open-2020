# Patientor
This application will be developed through exercises 9.8-13 and 9.16-9.27. This application called patientor is an electrical medical record that records entries of medical checks of patients. User can see or add new patients and also does the same (see and add) records of medical entries for each patients.

## Live Demo on Repl
https://fullstackopen2020-patientor.jordyf15.repl.co/

## Technologies Used
- Backend
    1. cors version ^2.8.5
    2. express version ^4.17.1
    3. uuid version ^8.3.1
    4. @types/cors version ^2.8.8
    5. @types/express version ^4.17.9
    6. @types/uuid version ^8.3.0
    7. @typescript-eslint/eslint-plugin version ^4.8.2
    8. @typescript-eslint/parser version ^4.8.2
    9. eslint version ^7.14.0
    10. ts-node-dev version ^7.14.0
    11. typescript version ^4.1.2
- Frontend
    1. axios version ^0.19.0
    2. formik version ^2.0.6
    3. react version ^16.11.0
    4. react-dom version ^16.11.0
    5. react-router-dom version ^5.1.2
    6. semantic-ui-css version ^2.4.1
    7. semantic-ui-react version ^0.88.1
    8. @types/axios version ^0.14.0
    9. @types/jest version 24.0.19
    10. @types/node version 12.11.7
    11. @types/react version ^16.9.11
    12. @types/react-dom version 16.9.3
    13. @types/react-router-dom version ^5.1.2
    14. @typescript-eslint/eslint-plugin version ^2.12.0
    15. @typescript-eslint/parser version 2.12.0
    16. eslint-config-react version ^1.1.7
    17. react-scripts version 3.3.0
    18. typescript version ^3.7.0

## Application Usage
How to use this application is pretty straightforward in the main page are displayed the list of patients below it is a button to display the add patient form. When the patient name in the list are clicked the app will render the patient info page where user can add the medical check entry for that patient.

## Exercises Development
1. Exercises 9.8 or Step 1:  
In step 1 we have to initialise the backend that will be used by the frontend. Configure eslint and tsconfig with the same configurations that are used in the material. Define an endpoint that responses to HTTP GET requests to route /ping. And make sure that the project is runnable with npm scripts both in development mode and as compiled code in production mode.
2. Exercises 9.9 or Step 2:  
In step 2 we have to fork and clone the project patientor and make sure that the backend answer to the ping request that frontend has made on startup.
3. Exercises 9.10 or Step 3:  
In step 3 we have to create a type Diagnose and use it to create endpoint /api/diagnoses for fetching all diagnoses with HTTP GET.
4. Exercises 9.11 or Step 4:  
In step 4 we have to create data type Patient and set up a GET-endpoint /api/patients that returns all patients to the frontend without it's field ssn.
5. Exercises 9.12 or Step 5:  
In step 5 we have to create a POST-endpoint /api/patients for adding patients.
6. Exercises 9.13 or Step 6:  
In step 6 we have to set up safe parsing, validation and type guards to the POST /api/patients request.
7. Exercises 9.16 or Step 7:  
In step 7 we have to create an endpoint /api/patients/:id that returns all of the patient information for one patient, including the array of patient entries that is still empty for all the patients and expand the backend types as instructed in the exercise.
8. Exercises 9.17 or Step 8:  
In step 8 we have to create a page for showing a patient's full information in the frontend. Where we fetch the data from the backend we created earlier, and add the fetched data to the application state's. If the fetched data is already in the application's state do not fetch from the backend again.
9. Exercises 9.18 or Step 9:  
In step 9 we have to refactor our code to use action creators for all task that alters the application's state.
10. Exercises 9.19 or Step 10:  
In step 10 we have to define the types OccupationalHealthCareEntry and HospitalEntry so that those conform with the example data.
11. Exercises 9.20 or Step 11:  
In step 11 we have to extend a patient's page in the frontend to list the date, description and diagnose codes of the patient's entries.
12. Exercises 9.21 or Step 12:  
In step 12 we have to fetch and add diagnoses to application state from /api/diagnosis endpoint. Use the new diagnosis data to show the descriptions for patient's diagnosis codes.
13. Exercises 9.22 or Step 13:  
In step 13 we have to extend the entry-listing in the patient page to include the Entry's details with a new component that shows rest of the information of the patients entries distinguishing different types from each other. We could use Icon from SemanticUI to get appropriate visuals for the entry-listing.
14. Exercises 9.23 or Step 14:  
In step 14 we have to add an endpoint /api/patients/:id/entries to our backend, through which we can POST an entry for a patient.
15. Exercises 9.24 or Step 15:  
In step 15 we have to add a form for adding an entry to a patient. For this step it is enough to support one entry type. (There are 3 entry type: OccupatianalHealthcare, Hospitalcheck, Healthcheck).
16. Exercises 9.25 or Step 16:  
In step 16 we have to extend the form so that it displays an error message if some required values are missing or formatted incorrectly.
17. Exercises 9.26 or Step 17:  
In step 17 we have to extend our form so that it supports two entry types and displays an error message if some required values are missing or formatted incorrectly.
18. Exercises 9.27 or Step 18:  
In step 18 we have to extend our form so that it supports all the entry types and displays an error message if some required values are missing or formatted incorrectly.