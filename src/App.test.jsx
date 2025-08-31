// src/App.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { getCurrentState, resetState, updateState } from './gameState';

jest.mock('./gameState', () => ({
  getCurrentState: jest.fn(),
  resetState: jest.fn(),
  updateState: jest.fn(),
}));

describe('App Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    getCurrentState.mockReturnValue([
      ['X', null, null],
      [null, 'O', null],
      [null, null, 'X'],
    ]);
  });

  test('renders the game board with initial state', () => {
    render(<App />);
    expect(screen.getAllByRole('button', { name: /X|O/ })).toHaveLength(3);
    expect(screen.getAllByRole('button', { name: '' })).toHaveLength(6);
  });

  test('New Game resets the board', () => {
    render(<App />);
    fireEvent.click(screen.getByText('New Game'));
    expect(resetState).toHaveBeenCalled();
  });

  test('About shows the correct summary', () => {
    render(<App />);
    fireEvent.click(screen.getByText('About'));
    expect(screen.getByText(/Tic Tac Toe game/)).toBeInTheDocument();
  });

  test('Exit shows a polite message', () => {
    render(<App />);
    fireEvent.click(screen.getByText('Exit'));
    expect(window.alert).toHaveBeenCalledWith('Thank you for playing Tic Tac Toe!');
  });

  test('Clicking on a cell updates the board', () => {
    render(<App />);
    fireEvent.click(screen.getAllByRole('button', { name: '' })[0]);
    expect(updateState).toHaveBeenCalledWith(0, 0, true);
  });

  test('Displays the correct winner', () => {
    getCurrentState.mockReturnValue([
      ['X', 'X', 'X'],
      [null, 'O', null],
      [null, null, 'O'],
    ]);
    render(<App />);
    expect(screen.getByText('Winner: X')).toBeInTheDocument();
  });

  test('Displays the next player when no winner', () => {
    render(<App />);
    expect(screen.getByText('Next player: X')).toBeInTheDocument();
  });
});