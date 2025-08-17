// gameState.js

// Initialize the game board with empty cells
const initialState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Function to get the current state of the game board
function getCurrentState() {
  return initialState;
}

// Function to update the game board with a player's move
function updateState(row, col, player) {
  if (initialState[row][col] === '') {
    initialState[row][col] = player;
    return true;
  }
  return false;
}

// Function to reset the game board to the initial state
function resetState() {
  initialState.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      initialState[rowIndex][colIndex] = '';
    });
  });
}

module.exports = {
  getCurrentState,
  updateState,
  resetState
};