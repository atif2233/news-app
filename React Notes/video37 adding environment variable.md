in this video i will add environment variable 

what is environment variable ?

In React, environment variables are used to manage configuration values that are specific to the development or production environment. These variables allow you to define settings that may vary between different environments without hardcoding them directly into your codebase. This is particularly useful for values like API URLs, authentication tokens, or feature toggles.

for adding environment variable i have to create .env file and then create environment variable using below name 
REACT_APP_NEWS_API

for creating reactenvironment variable
we have to specify REACT_APP_ first 
and then main name NEWS_API 
and then it's value 'b95a1021963f4e49b901b724f73c9a62'


and then i access this variable as apiKey = process.env.REACT_APP_NEWS_API; in app.js 
and pass it to the news.js component as props 

process.env. is must to write first for accessing react environment variable 