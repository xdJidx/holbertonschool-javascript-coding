const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the HTTP response header to indicate plain text
  res.setHeader('Content-Type', 'text/plain');

  // Send the response with the message "Hello Holberton School!"
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
app.listen(1245);

// Export the app variable
module.exports = app;
