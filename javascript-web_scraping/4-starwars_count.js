#!/usr/bin/node
const request = require('request');
let countFilms = 0;

request(process.argv[2], function (err, _response, body) {
  if (err == null) {
    const resp = JSON.parse(body); // Analyse la resp JSON en un objet JS

    const { results } = resp;// Obtient la propriété 'results' de l'objet 'resp'.

    for (const element of results) {
      const { characters } = element;

      for (const personnage of characters) {
        if (personnage.search('18') >= 0) {
          countFilms++;
        }
      }
    }
  }
  console.log(countFilms);
});
