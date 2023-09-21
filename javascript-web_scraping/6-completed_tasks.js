#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const todo = JSON.parse(body);

    const completedTasksByUser = {};

    // list task in Json
    for (const task of todo) {
      // Verrify if task is complete
      if (task.completed) {
        // obtent ID of user
        const userId = task.userId;

        if (completedTasksByUser[userId]) {
          completedTasksByUser[userId]++;
        } else {
        // user ccomplete firt task
          completedTasksByUser[userId] = 1;
        }
      }
    }

    console.log(completedTasksByUser);
  } else {
    console.error(error || `Code d'état ${response.statusCode}`);
  }
});
