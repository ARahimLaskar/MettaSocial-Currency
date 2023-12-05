# React Currency Information App Documentation

## Overview

<p>This documentation provides an overview of the React Currency Information App, detailing its functionality, features, technologies used, and deployment process.</p>

## Project Description

<p>The React Currency Information App is a web application built using React. It allows users to input a currency code and fetch information about that currency from an external API. Upon submission, the app sends a request to the API using Axios, retrieves data based on the currency code entered by the user, and displays the fetched information in a visually appealing manner.</p>

<p>The application uses Redux and Redux Thunk for state management, allowing for a streamlined and organized data flow. React components manage the UI, displaying loading indicators during API requests, showing fetched data within a card containing the country flag, capital city, region, currency symbol, and name. Additionally, error handling is implemented to manage cases where the input value is not present in the API or if there's an issue while fetching data.</p>

## Technologies Used

<ul>
<li>React: Front-end library for building user interfaces.</li>
<li>CSS: Styling the components and layout.</li>
<li>React-Redux: State management library for React applications.</li>
<li>Redux-Thunk: Middleware for handling asynchronous actions in Redux.</li>
<li>Axios: HTTP client for making API requests.</li>
<li>React-Loading: Library for displaying loading indicators.</li>
<li>GitHub: Version control and code repository.</li>
<li>Netlify: Deployment platform for hosting the application.</li>

</ul>

## Features

<ul>
<h2>Input Component</h2>
<li>Provides an input box for users to enter a currency code.</li>
<h2>Request Handling</h2>
<li>Upon submitting the currency code, the app sends a request to the external API using Axios.</li>
<li>Displays a loading indicator while waiting for the API response.</li>
<h2>Result Component</h2>
<li>Upon successful API response, displays fetched data in a card format.</li>
<li>The card includes the country flag, country name, capital city, region, currency symbol, and currency name.</li>
<h2>Error Handling</h2>
<li>Manages cases where the input value is not present in the API or if there's an error while fetching data.</li>
<li>Displays an error component to notify users about the issue encountered.</li>
<h2>Deployment</h2>
<li>The React Currency Information App is deployed using Netlify for hosting the application.</li>
<h2>To run the application locally:</h2>
<li>Clone the GitHub repository containing the React Currency Information App.</li>
<li>Install dependencies using `npm install`.</li>
<li>Start the development server with `npm run dev`.</li>
<li>Access the application via the provided localhost address.</li>

</ul>

## Conclusion

The React Currency Information App offers users a simple yet efficient way to retrieve currency-related information by leveraging React and Redux for seamless state management and a user-friendly interface. The application's use of external APIs and error handling ensures a reliable and informative user experience.

## Deployed Link:

https://mettaschool-currency.netlify.app/
