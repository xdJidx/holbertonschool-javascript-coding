// Import the HTTP module to create a server
const http = require('http');
// Import the countStudents function to read and process the CSV file
const countStudents = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  // Set the content type of the response
  res.setHeader('Content-Type', 'text/plain');

  // Handle the root route
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      const messages = [];
      messages.push('This is the list of our students');

      // Retrieve student data from the CSV file
      const data = await countStudents('database.csv');

      // Add the total number of students to the messages array
      messages.push(`Number of students: ${data.total}`);

      // Add the number of students per field to the messages array
      for (const [field, students] of Object.entries(data.fields)) {
        messages.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      // Send the messages as a response
      res.end(messages.join('\n'));
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

// Start the server to listen on port 1245
app.listen(1245);

// Export the application for potential use in other modules
module.exports = app;
