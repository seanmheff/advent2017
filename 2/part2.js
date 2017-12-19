const fs = require('fs');

function mapLine(input) {
  const values = input.split('\n').map(line => divide(line));
  return values.reduce((a, b) => a + b);
}

function divide(input) {
  const values = input.split(/\s+/).map(value => parseInt(value));
  for (let i=0; i<values.length; i++) {
    for (let j=0; j<values.length; j++) {
      if ((values[i] / values[j]) % 1 === 0 && values[i] !== values[j]) {
        return values[i] / values[j];
      }
    }
  }
}

module.exports = divide;

console.log(mapLine(fs.readFileSync('./2/input.txt', 'utf8')));
