function isValid(line) {
  let map = {};
  const groups = line.split(' ');
  for (let i=0; i<groups.length; i++) {
    const sorted = groups[i].split('').sort().join('');
    if (map[sorted]) {
      return false
    } else {
      map[sorted] = true;
    }
  }
  return true;
}


if (require.main === module) {
  const fs = require('fs');
  const lines = fs.readFileSync('./4/input.txt', 'utf-8').split('\n');
  const numValid = lines.reduce((acc, line) => isValid(line) ? acc + 1 : acc, 0);
  console.log(numValid);
}


module.exports.isValid2 = isValid;
