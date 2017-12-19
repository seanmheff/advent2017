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

function setCurrentEntry(grid, x, y, currentDirection, counter) {
  switch(currentDirection) {
    case 'right':
      return grid[`${x+1},${y}`] = counter;
    case 'up':
      return grid[`${x},${y+1}`] = counter;
    case 'left':
      return grid[`${x-1},${y}`] = counter;
    case 'down':
      return grid[`${x},${y-1}`] = counter;
  }
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

function populateGrid(grid, endNumber) {
  let x = 0;
  let y = 0;
  let counter = 2;
  let currentDirection = 'right';

  // Create the initial entry
  grid[`${x},${y}`] = 1;

  while (counter < endNumber) {
    // Set the current entry
    setCurrentEntry(grid, x, y, currentDirection, counter);

    // Update x,y,counter
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
    counter += 1;

    // See where to move to next
    const desiredDirection = getDesiredDirection(currentDirection);
    if (desiredSquareAvailable(grid, x, y, desiredDirection)) {
      currentDirection = desiredDirection;
    }
  }

  return grid;
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function calculateDistance(grid, number) {
  const key = getKeyByValue(grid, number);
  let [x, y] = key.split(',');
  return Math.abs(x) + Math.abs(y);
}


module.exports.populateGrid = populateGrid;
module.exports.calculateDistance = calculateDistance;


if (require.main === module) {
  let grid = {};
  populateGrid(grid, 289327);
  console.log(calculateDistance(grid, 289326));
}

