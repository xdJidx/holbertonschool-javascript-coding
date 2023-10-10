// Import the 'http' module to create an HTTP server
const http = require('http');
// Import the 'countStudents' function
const countStudents = require('./3-read_file_async');

// Create an HTTP server
const app = http.createServer(async (req, res) => {
  // Set the status code to 200 and the content type to plain text
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Define route
  if (req.url === '/') {
    // Respond with a simple greeting
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // Respond with a message indicating the list of students
    res.write('This is the list of our students\n');

    try {
      // Read and process student data
      const data = await countStudents(process.argv[2]);
      // Send the student data as a response
      res.end(`${data.join('\n').filter(Boolean)}`);
    } catch (error) {
      // Handle errors by sending an error message
      res.end(error.message);
    }
  } else {
    // Respond with a "Not Found" message for unrecognized routes
    res.end('Not Found\n');
  }
});

// Start the server to listen on port 1245
app.listen(1245);

// Export the application for potential use in other modules
module.exports = app;
