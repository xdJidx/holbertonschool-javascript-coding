#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const apiURL = process.argv[2];
const filePath = process.argv[3];

request.get(apiURL, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    fs.writeFileSync(filePath, body, 'utf8');
  } else {
    console.error(error || `Erreur: Code d'état ${response.statusCode}`);
  }
});
