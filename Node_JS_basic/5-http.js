const http = require('http');
const fs = require('fs');

const databasePath = process.argv[2];

// Create an HTTP server
const app = http.createServer((req, res) => {
  // Set the HTTP response header to indicate plain text
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // If the URL path is '/', display "Hello Holberton School!"
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    // If the URL path is '/students', read the database file and display the content
    readDatabaseAndSendResponse(res);
  } else {
    // For any other URL path, return a 404 response
    res.writeHead(404);
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

function readDatabaseAndSendResponse(res) {
  fs.readFile(databasePath, 'utf8', (err, data) => {
    if (err) {
      res.end('Cannot load the database\n');
    } else {
      const lines = data.split('\n').filter(Boolean);
      const fields = {};

      lines.forEach((line) => {
        const parts = line.split(':');
        if (parts.length === 2) {
          const student = parts[0].trim();
          const field = parts[1].trim();
          if (fields[field]) {
            fields[field].push(student);
          } else {
            fields[field] = [student];
          }
        }
      });

      res.write('This is the list of our students\n');
      res.write(`Number of students: ${lines.length}\n`);
      for (const field in fields) {
        res.write(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`);
      }
      res.end();
    }
  });
}

// Export the app variable
module.exports = app;
