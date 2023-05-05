# E-Commerce-Back-End

## Overview

This E-Commerce backend is a REST API for an internet retail website. The API is built on a Express.js server that uses Sequelize to interact with a MySQL database. Sequelize is a promise-based Node.js ORM(Object Relation Mapping) for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.

This E-Commerce backend has the API routes that point to each of the standard CRUD operations for each data group. The routes can be used to:

Create categories, products, tags
View categories, products, tags
Establish associations between the different entities
Update categories, products, & tags
Delete entries from the database

## Built With

Node.js
Sequelize
Express.js
Visual Studio Code

## Installation

Clone this repo on your local machine:

$ git clone https://github.com/Sabeen44/E-Commerce-Back-End.git

To install and set up the application, run:

$ npm install

To connect to your MySQL database, place a .env file in the root directory of the project and enter the following info

DB_NAME=
DB_PASSWORD=
DB_USER=

## Usage

To finish setting up and using the application complete the following steps:

Create a MySQL database on your local machine using the schema.sql file located in the /db/ director y(From the MySQL CLI, source db/schema.sql)
Seed the database with sample data to be used for testing purposes(Run npm run seed from inside the root directory of the project)
Now you're ready to start the application! You can start the server by running:

npm start
The server is running, now you can make requests through a HTTP/API client such as Insomnia or Postman.

## Demo

## Questions

Connect on linkedIn
