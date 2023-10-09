const express = require('express');
const { countStudents } = require('./3-read_file_async');

const app = express();
const port = 1245;
const databaseFile = process.argv[2] || 'database.csv';

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const studentsInfo = await countStudents(databaseFile);
    res.send(`This is the list of our students\n${studentsInfo}`);
  } catch (error) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
