import React from 'react';

const MenuBar = ({ resetGame, setShowGoodbyeMessage }) => {
  const handleNewGame = () => resetGame();

  const handleExit = () => {
    setShowGoodbyeMessage(true);
  };

  const handleAbout = () => {
    const summary = `
      Tic-Tac-Toe Game Summary:
      - 3x3 grid gameplay
      - Alternating turns (X/O)
      - Winner detection (rows, columns, diagonals)
      - Draw detection
      - Restart functionality
    `;
    if (typeof window !== 'undefined') {
      alert(summary);
    }
  };

  return (
    <nav className="bg-gray-800 p-3 text-white shadow-md">
      <div className="flex items-center space-x-4">
        <button
          onClick={handleNewGame}
          className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded"
        >
          New Game
        </button>
        <button
          onClick={handleExit}
          className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded"
        >
          Exit
        </button>
        <button
          onClick={handleAbout}
          className="bg-blue-500 hover:bg-blue-700 text-white px-3 py-2 rounded"
        >
          About
        </button>
      </div>
    </nav>
  );
};

export default MenuBar;
