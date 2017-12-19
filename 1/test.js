const part1 = require('./part1');
const part2 = require('./part2');

describe('part1', () => {
  it('produces a sum of 3 for 1122', () => {
    expect(part1('1122')).toBe(3);
  });

  it('produces a sum of 4 for 1111', () => {
    expect(part1('1111')).toBe(4);
  });

  it('produces a sum of 0 for 1234', () => {
    expect(part1('1234')).toBe(0);
  });

  it('produces a sum of 9 for 91212129', () => {
    expect(part1('91212129')).toBe(9);
  });
});

fdescribe('part2', () => {
  it('produces a sum of 6 for 1212', () => {
    expect(part2('1212')).toBe(6);
  });

  it('produces a sum of 0 for 1221', () => {
    expect(part2('1221')).toBe(0);
  });

  it('produces a sum of 4 for 123425', () => {
    expect(part2('123425')).toBe(4);
  });

  it('produces a sum of 12 for 123123', () => {
    expect(part2('123123')).toBe(12);
  });

  it('produces a sum of 4 for 12131415', () => {
    expect(part2('12131415')).toBe(4);
  });
});
