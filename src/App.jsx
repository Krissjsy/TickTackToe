import React, { useState, useEffect } from 'react';
import { getCurrentState, updateState, resetState } from '../gameState';
import MenuBar from './MenuBar';
import Board from './Board';

const App = () => {
  const slogans = [
    "Play smart, play Tic-Tac-Toe!",
    "Winning is just a move away!",
    "Tic-Tac-Toe: Where strategy meets fun!",
    "Ready to challenge your opponent?",
    "Master the art of Tic-Tac-Toe!",
    "Every game is a new adventure!",
    "Think ahead, win the game!",
    "Tic-Tac-Toe: The ultimate brain teaser!",
    "Challenge yourself, challenge others!",
    "Tic-Tac-Toe: Where every move counts!"
  ];

  const [currentSlogan, setCurrentSlogan] = useState('');
  const [board, setBoard] = useState(getCurrentState().flat());
  const [isXNext, setIsXNext] = useState(true);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * slogans.length);
    setCurrentSlogan(slogans[randomIndex]);
  }, []);

  const resetGame = () => {
    resetState();
    setBoard(getCurrentState().flat());
    setIsXNext(true);
    const randomIndex = Math.floor(Math.random() * slogans.length);
    setCurrentSlogan(slogans[randomIndex]);
  };

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

  const winner = calculateWinner(getCurrentState().flat());
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  const [showGoodbyeMessage, setShowGoodbyeMessage] = useState(false);

  const handleExit = () => {
    window.location.href = 'http://krisspolanski.com';
  };

  return (
    <div className="game">
      {showGoodbyeMessage ? (
        <div className="goodbye-message">
          <p>Thanks for playing! Goodbye!</p>
          <button onClick={handleExit}>Exit</button>
        </div>
      ) : (
        <>
          <MenuBar resetGame={resetGame} setShowGoodbyeMessage={setShowGoodbyeMessage} />
          <Board />
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
          <footer className="footer">
            <div className="scrolling-slogan">{currentSlogan}</div>
          </footer>
        </>
      )}
    </div>
  );
};

export default App;