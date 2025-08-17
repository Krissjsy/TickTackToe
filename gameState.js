// gameState.js

// Initialize the game board with empty cells
let currentState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Function to get the current state of the game board
function getCurrentState() {
  return currentState.map(row => [...row]);
}

// Function to update the game board with a player's move
function updateState(row, col, player) {
  if (currentState[row][col] === '') {
    currentState[row][col] = player;
    return true;
  }
  return false;
}

// Function to reset the game board to the initial state
function resetState() {
  currentState = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
}

export { getCurrentState, updateState, resetState };