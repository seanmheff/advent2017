function canGoUp(grid, currentPosition) {
  let [x, y] = currentPosition.split(',');
  return grid[`${x},${y+1}`] === undefined;
}

function canGoDown(grid, currentPosition) {
  let [x, y] = currentPosition.split(',');
  return grid[`${x},${y-1}`] === undefined;
}

function canGoLeft(grid, currentPosition) {
  let [x, y] = currentPosition.split(',');
  return grid[`${x-1},${y}`] === undefined;
}

function canGoRight(grid, currentPosition) {
  let [x, y] = currentPosition.split(',');
  return grid[`${x+1},${y}`] === undefined;
}

function getDesiredDirection(currentDirection) {
  switch(currentDirection) {
    case 'right':
      return 'up';
    case 'up':
      return 'left';
    case 'left':
      return 'down';
    case 'down':
      return 'right';
  }
}

function computeValue(grid, x, y) {
  let total = 0;
  total += grid[`${x-1},${y+1}`] || 0   // NW
  total += grid[`${x},${y+1}`] || 0     // N
  total += grid[`${x+1},${y+1}`] || 0   // NE
  total += grid[`${x+1},${y}`] || 0     // E
  total += grid[`${x+1},${y-1}`] || 0   // SE
  total += grid[`${x},${y-1}`] || 0     // S
  total += grid[`${x-1},${y-1}`] || 0   // SW
  total += grid[`${x-1},${y}`] || 0     // W
  return total;
}

function setCurrentEntry(grid, x, y) {
  return grid[`${x},${y}`] = computeValue(grid, x, y);
}

function desiredSquareAvailable(grid, x, y, desiredDirection) {
  switch(desiredDirection) {
    case 'right':
      return grid[`${x+1},${y}`] === undefined;
    case 'up':
      return grid[`${x},${y+1}`] === undefined;
    case 'left':
      return grid[`${x-1},${y}`] === undefined;
    case 'down':
      return grid[`${x},${y-1}`] === undefined;
  }
}

function populateGrid(grid, puzzleInput) {
  let x = 0;
  let y = 0;
  let currentValue = 1;
  let currentDirection = 'right';

  // Create the initial entry
  grid[`${x},${y}`] = currentValue;

  while (currentValue < puzzleInput) {
    // Update x,y
    switch(currentDirection) {
      case 'right':
        x += 1;
        break;
      case 'up':
        y += 1;
        break;
      case 'left':
        x -= 1;
        break;
      case 'down':
        y -= 1;
        break;
    }

    // Set the current entry
    currentValue = setCurrentEntry(grid, x, y);

    // See where to move to next
    const desiredDirection = getDesiredDirection(currentDirection);
    if (desiredSquareAvailable(grid, x, y, desiredDirection)) {
      currentDirection = desiredDirection;
    }
  }

  return currentValue;
}


module.exports.populateGrid2 = populateGrid;


if (require.main === module) {
  let grid = {};
  console.log(populateGrid(grid, 289327));
}

