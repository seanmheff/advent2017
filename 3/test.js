const { populateGrid, calculateDistance } = require('./part1');

describe('part1', () => {
  let grid;

  beforeEach(() => {
    grid = {};
    populateGrid1(grid, 1025);
  });

  it('has a distance of 0 for step 1', () => {
    expect(calculateDistance(grid, 1)).toBe(0);
  });

  it('has a distance of 3 for step 12', () => {
    expect(calculateDistance(grid, 12)).toBe(3);
  });

  it('has a distance of 2 for step 23', () => {
    expect(calculateDistance(grid, 23)).toBe(2);
  });

  it('has a distance of 31 for step 1024', () => {
    expect(calculateDistance(grid, 1024)).toBe(31);
  });
});
