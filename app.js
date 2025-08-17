// app.js

import { getCurrentState, updateState, resetState } from './gameState.js';

const cells = document.querySelectorAll('.cell');
const currentPlayerDisplay = document.getElementById('current-player');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';

function renderBoard() {
  const state = getCurrentState();
  cells.forEach(cell => {
    const row = cell.getAttribute('data-row');
    const col = cell.getAttribute('data-col');
    cell.textContent = state[row][col];
  });
}

function handleCellClick(event) {
  const cell = event.target;
  const row = cell.getAttribute('data-row');
  const col = cell.getAttribute('data-col');

  if (updateState(row, col, currentPlayer)) {
    renderBoard();
    if (checkWin()) {
      alert(`${currentPlayer} wins!`);
      resetState();
      renderBoard();
    } else if (checkDraw()) {
      alert('Draw!');
      resetState();
      renderBoard();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      currentPlayerDisplay.textContent = currentPlayer;
    }
  }
}

function checkWin() {
  const state = getCurrentState();
  const winConditions = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];

  return winConditions.some(condition => {
    const [a, b, c] = condition;
    return state[a[0]][a[1]] && state[a[0]][a[1]] === state[b[0]][b[1]] && state[a[0]][a[1]] === state[c[0]][c[1]];
  });
}

function checkDraw() {
  const state = getCurrentState();
  return state.every(row => row.every(cell => cell !== ''));
}

function handleResetClick() {
  resetState();
  renderBoard();
  currentPlayer = 'X';
  currentPlayerDisplay.textContent = currentPlayer;
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', handleResetClick);

renderBoard();