const fs = require('fs').promises;

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8')
      .then((data) => {
        const lines = data.split('\n').filter(Boolean);
        const fields = {};

        lines.forEach((line) => {
          const [firstName, , , field] = line.split(',');
          if (field) {
            const trimmedField = field.trim();
            if (fields[trimmedField]) {
              fields[trimmedField].push(firstName);
            } else {
              fields[trimmedField] = [firstName];
            }
          }
        });

        resolve(fields);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

module.exports = { readDatabase };
