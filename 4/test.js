const { isValid1 } = require('./part1');
const { isValid2 } = require('./part2');

describe('part1', () => {
  it('returns true for "aa bb cc dd ee"', () => {
    expect(isValid1('aa bb cc dd ee')).toBe(true);
  });

  it('returns false for "aa bb cc dd aa"', () => {
    expect(isValid1('aa bb cc dd aa')).toBe(false);
  });

  it('returns true for "aa bb cc dd aaa"', () => {
    expect(isValid1('aa bb cc dd aaa')).toBe(true);
  });
});

fdescribe('part2', () => {
  it('returns true for "abcde fghij"', () => {
    expect(isValid2('abcde fghij')).toBe(true);
  });

  it('returns false for "abcde xyz ecdab"', () => {
    expect(isValid2('abcde xyz ecdab')).toBe(false);
  });

  it('returns true for "a ab abc abd abf abj"', () => {
    expect(isValid2('a ab abc abd abf abj')).toBe(true);
  });

  it('returns true for "iiii oiii ooii oooi oooo"', () => {
    expect(isValid2('iiii oiii ooii oooi oooo')).toBe(true);
  });

  it('returns false for "oiii ioii iioi iiio"', () => {
    expect(isValid2('oiii ioii iioi iiio')).toBe(false);
  });
});
