const readline = require('readline').createInterface({input: process.stdin});
let countValid = 0;

readline.on('line', (line) => {
  if (line ===   '') {
    console.log('count valid: ' + countValid);
    readline.close();
  }
  countValid += +isValid(line);
});

const isValid = (passphrase) => !!passphrase.split(' ').reduce((words, word) => {
  const sorted = word.split('').sort().join('');
  return words && !words.includes(sorted) ? [...words, sorted] : false;
}, [])

