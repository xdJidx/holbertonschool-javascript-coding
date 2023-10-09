const express = require('express');
// Create an instance of the express application
const app = express();
const port = 1245;

// root endpoint '/'
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);

module.exports = app;
