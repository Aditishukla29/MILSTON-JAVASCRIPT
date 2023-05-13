const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number of rows: ', (rows) => {
  for (let i = rows; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += '*';
    }
    console.log(row);
  }
  rl.close();
});
