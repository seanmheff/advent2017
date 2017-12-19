const fs = require('fs');

function mapLine(input) {
  const differences = input.split('\n').map(line => difference(line));
  return differences.reduce((a, b) => a + b);
}

function difference(input) {
  const values = input.split(/\s+/).map(value => parseInt(value));
  const max = values.reduce((a, b) => Math.max(a, b));
  const min = values.reduce((a, b) => Math.min(a, b));
  return max - min;
}

module.exports = difference;

console.log(mapLine(fs.readFileSync('./2/input.txt', 'utf8')));
