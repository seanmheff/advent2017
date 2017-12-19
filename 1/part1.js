const fs = require('fs');

function part1(input) {
  let count = 0;
  for (let i=0; i<input.length; i++) {
    if (input[i] === input[(i+1) % input.length]) {
      count += parseInt(input[(i+1) % input.length]);
    }
  }
  return count;
}

module.exports = part1;

//console.log(part1(fs.readFileSync('./input.txt', 'utf8')));
