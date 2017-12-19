const part1 = require('./part1');
const part2 = require('./part2');

describe('part1', () => {
  it('produces a difference of 8 for "5 1 9 5"', () => {
    expect(part1('5 1 9 5')).toBe(8);
  });

  it('produces a difference of 4 for "7 5 3"', () => {
    expect(part1('7 5 3')).toBe(4);
  });

  it('produces a difference of 6 for "2 4 6 8"', () => {
    expect(part1('2 4 6 8')).toBe(6);
  });
});

describe('part2', () => {
  it('produces a value of 4 for "5 9 2 8"', () => {
    expect(part2('5 9 2 8')).toBe(4);
  });

  it('produces a value of 3 for "9 4 7 3"', () => {
    expect(part2('9 4 7 3')).toBe(3);
  });

  it('produces a value of 2 for "3 8 6 5"', () => {
    expect(part2('3 8 6 5')).toBe(2);
  });
});
