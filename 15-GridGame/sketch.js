//The mechanic time was taking a while for me so i used AI to help with it

let grid;
const GRID_SIZE = 10;
let cellSize;
let playerX = 0;
let playerY = 0;
let player2X = 9;
let player2Y = 9;
let Timer;
let youWon;
let timeLimit = 10;
let play = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);

  // Put player in the grid
  grid[playerY][playerX] = 9;
  grid[player2Y][player2X] = 3;

  if (height > width) {
    cellSize = width / GRID_SIZE;
  } else {
    cellSize = height / GRID_SIZE;
  }

  Timer = millis();

  setInterval(botPlayer, 80);
}

function draw() {
  background(220);
  displayGrid();

  //time
  let timeTaken = millis() - Timer;
  let timeRemaining = max(0, timeLimit * 1000 - timeTaken);
  let secondsleft = Math.ceil(timeRemaining / 1000);

  // display time
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255);
  text("Time: " + secondsleft, width / 2, 50);

  if (secondsleft <= 0) {
    let playerCount = countGrids(9);
    let player2Count = countGrids(3);

    if (playerCount > player2Count) {
      youWon = "Green player wins!";
    } else if (player2Count > playerCount) {
      youWon = "Red player wins!";
    } else {
      youWon = "looks like a draw";
    }

    textAlign(CENTER, CENTER);
    textSize(32);
    fill(255);
    text(youWon, width / 3, height / 2);
    play = false;
  }
}

function keyTyped() {
  if (play === false) {
    return;
  }
    else if (key === "s") {
    movePlayer(0, 1); // Move down
  } else if (key === "w") {
    movePlayer(0, -1); // Move up
  } else if (key === "a") {
    movePlayer(-1, 0); // Move left
  } else if (key === "d") {
    movePlayer(1, 0); // Move right
  }
}

function botPlayer() {
  if (play === true) {
    
    let randomMovement = int(random(4));
    if (randomMovement === 0) {
      movePlayer2(0, 1); // Move down
    } else if (randomMovement === 1) {
      movePlayer2(0, -1); // Move up
    } else if (randomMovement === 2) {
      movePlayer2(-1, 0); // Move left
    } else if (randomMovement === 3) {
      movePlayer2(1, 0); // Move right
    }
}
}

function movePlayer(x, y) {
    let gridX = playerX + x;
  let gridY = playerY + y;
  //edge case check
  if (player2X + x >= 0 && player2X + x < GRID_SIZE &&
      player2Y + y >= 0 && player2Y + y < GRID_SIZE) {
    
      playerX += x;
      playerY += y;

      //update grid here
      grid[playerY][playerX] = 9;
  }
}

function movePlayer2(x, y) {
  //edge case check
  if (player2X + x >= 0 && player2X + x < GRID_SIZE &&
      player2Y + y >= 0 && player2Y + y < GRID_SIZE) {
    
      player2X += x;
      player2Y += y;

     //update grid here
    grid[player2Y][player2X] = 3;
  }
  let gridX = player2X + x;
  let gridY = player2Y + y;
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function displayGrid() {
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 0) {
        fill("black");
      }
      else if (grid[y][x] === 9) {
        if (x === playerX && y === playerY) {
          fill("lightgreen"); 
        } else {
          fill("green");
        }
      }
      else if (grid[y][x] === 3) {
        fill("red");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function countGrids(value) {
  let count = 0;
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === value) {
        count++;
      }
    }
  }
  return count;
}