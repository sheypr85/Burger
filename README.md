# Eat-da-Burger-Node Application

Burger Restaurant App - MySQL, Express, Handlebars, ORM

## Overview
The burger app allows users to 'devour' a burger by clicking on a button, triggering a change for that burger in the database, and for the page to reload, showing the current state of all the data. An `express` server handles the API requests to retrieve and write data to the DB--using an ORM built for the project--and also returns the correct views.

## Depedencies
Bootstrap was used to create the views, and Handlebars to facilitate the loading of the data dynamically.

NPM packages used:
* `express` to create a server to handle requests for stored data and views
* `express-handlebars` to load the data into the views
* `mysql` to create the database connection, as well as push and pull data

## JawsDB
Since the app was deployed to Heroku, a remote DB setup was necessary. This was done by using JawsDB extension
