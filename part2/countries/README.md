# Countries
This application will be developed through exercises 2.12-2.14. Here we have to make an application that could display a list of countries or a single country information and it's weather depending on the search query. This application is created with the create-react-app. In this application i used two apis:  
1. Country API : `https://restcountries.eu`
2. Weather API : `https://weatherstack.com/`

## Live Demo on Repl.it
http://Full-Stack-Open-Countries-Data.jordyf15.repl.co

## Technologies Used
1. Html
2. Javascript
3. React version ^16.14.0

## Exercises Development
1. Exercises 2.12 or Step 1:  
In step 1 we need to fetch the country datas using the API `https://restcountries.eu`. The country to be shown is decided by typing in the search field. If there are more than 10 country which match the search query then display `Too many matches, specify another filter`. If there are less than equal 10 country which match the search query then display all their names. If there are only 1 country that matched the search query than display that country's information. 
2. Exercises 2.13 or Step 2:  
In step 2 we improve the application, such when there are multiple country names are rendered, we also need to render a button next to the name of the country which when are pressed will display all of that country's information.
3. Exercises 2.14 or Step 3:  
In step 3 we need to add the weather report (by using another api such as `https://weatherstack.com/`) of a country when there is a view showing the information of a single country (for example when search query result in 1 country or clicking the view button next to the country's name).
