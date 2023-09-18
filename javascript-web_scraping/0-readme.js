#!/usr/bin/node

const fs = require('fs');

// Check if the user provided a file path as an argument
if (process.argv.length !== 3) {
  console.error('Usage: node read_file.js <file_path>');
  process.exit(1);
}

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the content of the file in utf-8
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    // If an error occurred during reading, print the error object
    console.error(err);
  } else {
    // Print the content of the file
    console.log(data);
  }
});
