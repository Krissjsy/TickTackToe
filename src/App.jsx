import React, { useState } from 'react';
import { getCurrentState, updateState, resetState } from '../gameState.js';

const App = () => {
  const [board, setBoard] = useState(getCurrentState().flat());
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    const squares = getCurrentState().flat();
    if (calculateWinner(squares) || squares[index]) {
      return;
    }
    if (updateState(Math.floor(index / 3), index % 3, isXNext ? 'X' : 'O')) {
      setBoard(getCurrentState().flat());
      setIsXNext(!isXNext);
    }
  };

  const renderSquare = (index) => (
    <button className="cell" onClick={() => handleClick(index)}>
      {board[index]}
    </button>
  );

  const winner = calculateWinner(getCurrentState().flat());
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default App;