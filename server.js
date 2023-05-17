const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const dogsRouter = require('./routes/dogs');

// environment variables
require('dotenv').config()

// database connection
require('./config/database');

// middleware
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/dogs', dogsRouter);

app.listen(port, () => {
  console.log('You are connected to the Port 3000');
})