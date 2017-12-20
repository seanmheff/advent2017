function generateBanks(banks) {
  return banks.split(/\s+/).map(n => Array.from('x'.repeat(n)));
}

function hashBanks(banks) {
  return banks.map(blocks => blocks.length).join();
}

function findMostFullBank(banks) {
  return banks.reduceRight((acc,cur,index) => {
    return cur.length >= banks[acc].length ? index : acc;
  }, banks.length-1);
}

function performIteration(banks) {
  // Find bank with most blocks
  const index = findMostFullBank(banks);

  // Empty most full bank
  const tmp = Array.from('x'.repeat(banks[index].length));
  banks[index] = [];

  // Redistribute blocks
  for (let i=1; i<tmp.length+1; i++) {
    banks[(index+i) % banks.length] = banks[(index+i) % banks.length].concat(['x']);
  }

  return banks;
}

function solve(banks) {
  let map = {};
  let counter = 0;

  while (map[hashBanks(banks)] === undefined) {
    // Save the current state
    map[hashBanks(banks)] = counter;

    // Perform the next iteration
    banks = performIteration(banks);

    // Increment the counter
    counter += 1;
  }

  return counter - map[hashBanks(banks)];
}


if (require.main === module) {
  const fs = require('fs');
  console.log(solve(generateBanks(fs.readFileSync('./6/input.txt', 'utf-8'))));
}


module.exports.generateBanks = generateBanks;
module.exports.hashBanks = hashBanks;
module.exports.findMostFullBank = findMostFullBank;
module.exports.performIteration = performIteration;
module.exports.solve = solve;
