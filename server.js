const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;

// environment variables
require('dotenv').config()

const dogsRouter = require('./routes/dogs');

// database connection
require('./config/database');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use('/dogs', dogsRouter);

app.listen(port, () => {
  console.log('You are connected to the Port 3000');
})