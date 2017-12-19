const fs = require('fs');

function solution(input) {
  let count = 0;
  for (let i=0; i<input.length; i++) {
    const next = input[((input.length / 2) + i)% input.length];
    if (input[i] === next) {
      count += parseInt(next);
    }
  }
  return count;
}

module.exports = solution;

console.log(solution(fs.readFileSync('./input.txt', 'utf8')));
