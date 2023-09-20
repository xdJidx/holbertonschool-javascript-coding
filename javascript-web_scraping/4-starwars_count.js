#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];
const characterID = 18;

request(apiUrl, function (error, response, body) {
  if (error) {
    console.error(error);
    return;
  }

  const films = JSON.parse(body).results;
  let count = 0;

  for (const film of films) {
    for (const character of film.characters) {
      if (character.includes(`/people/${characterID}/`)) {
        count++;
        break; // count one time all character
      }
    }
  }
  console.log(count);
});
