process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', () => {
  const name = process.stdin.read();

  if (name) {
    console.log(`Your name is: ${name}`);
  }

  console.log('This important software is now closing');
  process.exit();
});
