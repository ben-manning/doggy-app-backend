const express = require('express');
const app = express();
const port = 3000;


// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('You are connected to the Port 3000');
})