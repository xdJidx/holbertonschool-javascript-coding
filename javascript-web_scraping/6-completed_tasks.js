#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: node 6-completed_tasks.js <API_URL>');
  process.exit(1);
}

// Define an object to store the count of completed tasks per user
const completedTasksByUser = {};

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Status code: ${response.statusCode}`);
    process.exit(1);
  }

  const todos = JSON.parse(body);

  // Iterate through the todos and count completed tasks per user
  for (const todo of todos) {
    if (todo.completed) {
      if (completedTasksByUser[todo.userId]) {
        completedTasksByUser[todo.userId]++;
      } else {
        completedTasksByUser[todo.userId] = 1;
      }
    }
  }

  // Print the completed tasks count per user as JSON object
  console.log(JSON.stringify(completedTasksByUser, null, 2));
});
