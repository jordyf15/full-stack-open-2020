# First-Step
This application will be developed through exercises 9.1-9.7 in part 9. This express app can calculate the bmi(body mass index) category given in the url query and also an exercises calculator that could calculate the average time of daily exercise hours and compares it to the target amount of daily hours and returns an object that includes the details of the exercises.

## Live Demo on Repl
https://FullStackOpen2020-FirstStep-Typescript.jordyf15.repl.co

## Technologies Used
1. @types/node version ^14.14.10
2. express version ^4.17.1
3. ts-node version ^9.0.0
4. typescript version ^4.1.2
5. @types/express version ^4.17.9
6. @typescript-eslint/eslint-plugin version ^4.8.2
7. @typescript-eslint/parser version ^4.8.2
8. eslint version ^7.14.0
9. ts-node-dev version ^1.0.0

## Application Usage
Instruction how to use the application are provided in the `/` route of the application.

## Exercises Development
1. Exercises 9.1 or Step 1:  
In step 1 we have to write a function calculateBmi that counts BMI based on given height (in centimeters) and weight (in kilograms) and then returns a message that suits the results. Create this exercise in a file named bmiCalculator.ts and create an npm script for running it with the command npm run calculateBmi.
2. Exercises 9.2 or Step 2:  
In step 2 we have to create a function calculaeExercise that calculates the average time of daily exercise hours and compares it to the target amount of daily hours and returns an object that includes the following values:  
    - the number of days
    - the number of training days
    - the original target value
    - the calculated average time
    - boolean value describing if the target was reached
    - a rating between the numbers 1-3 that tells how well the target are met.
    - a text value explaining the rating
Create this exercise in a file named exerciseCalculator.ts and create an npm script to run it with the command npm run calculateExercises.
3. Exercises 9.3 or Step 3:  
In step 3 we need to change the previous exercises so that we can give the parameters of bmiCalculator and exerciseCalculator as command line arguments.
4. Exercises 9.4 or Step 4:  
In step 4 we need to add express to our application and create a HTTP GET endpoint hello that answers 'Hello Full Stack!' and also replace our existing tsconfig.json with the content provided in the exercises.
5. Exercises 9.5 or Step 5:  
In step 5 we need to add an endpoint for BMI-calculator that can be used by doing a HTTP GET request to endpoint bmi and specifying the input with query string parameters.
6. Exercises 9.6 or Step 6:  
In step 6 we need to configure our project to use the above eslint settings and fix all the warnings.
7. Exercises 9.7 or Step 7:  
In step 7 we need to add an endpoint to your app for the exercise calculator. It should be used by doing a HTTP POST request to endpoint exercises with the input in the request body (we can test is using postman).

