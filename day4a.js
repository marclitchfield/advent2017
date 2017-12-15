const readline = require('readline').createInterface({input: process.stdin});
let countValid = 0;

readline.on('line', (line) => {
  if (line ===   '') {
    console.log('count valid: ' + countValid);
    readline.close();
  }
  countValid += +isValid(line);
});

const isValid = (passphrase) => passphrase.split(' ').every(
  (value, index, self) => self.indexOf(value) === index
);
