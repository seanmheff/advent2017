const {
  generateBanks,
  hashBanks,
  findMostFullBank,
  performIteration,
  solve
} = require('../part1');

describe('part1', () => {
  describe('generateBanks', () => {
    it('creates arrays of Xs', () => {
      expect(generateBanks('0  2  7  0')).toEqual([
        [], [ 'x', 'x' ], [ 'x', 'x', 'x', 'x', 'x', 'x', 'x' ], []
      ]);
    });
  });

  describe('hashBanks', () => {
    it('maps the banks to a consistant format', () => {
      const data = [[], [ 'x', 'x' ], [ 'x', 'x', 'x', 'x', 'x', 'x', 'x' ], []];
      expect(hashBanks(data)).toBe('0,2,7,0');
    });
  });

  describe('findMostFullBank', () => {
    it('returns 2 for "0,2,7,0"', () => {
      expect(findMostFullBank(generateBanks('0  2  7  0'))).toBe(2);
    });

    it('returns 1 for "2 4 1 2"', () => {
      expect(findMostFullBank(generateBanks('2 4 1 2'))).toBe(1);
    });

    it('returns 0 for "3 1 2 3"', () => {
      expect(findMostFullBank(generateBanks('3 1 2 3'))).toBe(0);
    });

    it('returns 3 for "0 2 3 4"', () => {
      expect(findMostFullBank(generateBanks('0 2 3 4'))).toBe(3);
    });
  });

  describe('performIteration', () => {
    it('changes "0, 2, 7, 0" to "2 4 1 2"', () => {
      const input = generateBanks('0  2  7  0');
      const output = generateBanks('2  4  1  2');
      expect(performIteration(input)).toEqual(output);
    });

    it('changes "2 4 1 2" to "3 1 2 3"', () => {
      const input = generateBanks('2  4  1  2');
      const output = generateBanks('3  1  2  3');
      expect(performIteration(input)).toEqual(output);
    });
  });

  describe('solve', () => {
    it('takes 5 iterations to solve "0  2  7  0"', () => {
      const input = generateBanks('0  2  7  0');
      expect(solve(input)).toBe(5);
    });
  });
});
