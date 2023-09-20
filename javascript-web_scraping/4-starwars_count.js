#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

if (!apiUrl) {
  console.error('Usage: node 4-starwars_count.js <API_URL>');
  process.exit(1);
}

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error(`Status code: ${response.statusCode}`);
    process.exit(1);
  }

  const filmsData = JSON.parse(body);
  const characterId = 18;

  // Filter the films where Wedge Antilles (character ID 18) is present
  const filmsAge = filmsData.results.filter((film) =>
    film.characters.includes(`https://swapi-api.hbtn.io/api/people/${characterId}/`)
  );

  // Print the number of films where Wedge Antilles is present
  console.log(filmsAge.length);
});
