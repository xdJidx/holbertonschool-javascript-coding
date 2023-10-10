// Import the 'express' framework
const express = require('express');
// Import the 'countStudents' function
const countStudents = require('./3-read_file_async');

// Create an Express application
const app = express();

// Define a route for ('/')
app.get('/', (req, res) => res.send('Hello Holberton School!'));

// Define a route for '/students'
app.get('/students', async (req, res) => {
  // Define a title for the response
  const title = 'This is the list of our students\n';

  try {
    // Read and process student data from a file specified in command-line arguments
    const data = await countStudents(process.argv[2]);
    // Send the student data with the title as the response
    res.send(`${title}${data.join('\n')}`);
  } catch (error) {
    // Handle errors by sending an error message with the title as the response
    res.send(`${title}${error.message}`);
  }
});

// Start the Express application to listen on port 1245
app.listen(1245);

// Export the Express application for potential use in other modules
module.exports = app;
