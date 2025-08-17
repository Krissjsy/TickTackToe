// gameState.test.js

const { getCurrentState, updateState, resetState } = require('./gameState.js');

describe('Game State Management', () => {
  beforeEach(() => {
    resetState();
  });

  test('should initialize the game state with an empty board', () => {
    const state = getCurrentState();
    expect(state).toEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
  });

  test('should update the game state correctly', () => {
    updateState(0, 0, 'X');
    const state = getCurrentState();
    expect(state).toEqual([
      ['X', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
  });

  test('should not update the game state if the cell is already occupied', () => {
    updateState(0, 0, 'X');
    updateState(0, 0, 'O');
    const state = getCurrentState();
    expect(state).toEqual([
      ['X', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
  });

  test('should reset the game state to an empty board', () => {
    updateState(0, 0, 'X');
    resetState();
    const state = getCurrentState();
    expect(state).toEqual([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
  });
});