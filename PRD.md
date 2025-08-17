# PRD: Tic-Tac-Toe Game (React JS)

## 🔑 Goal of the App
Design and implement a simple, user-friendly Tic-Tac-Toe web game using React JS. The app should allow two players to take turns, determine a winner or draw, and provide the option to restart the game. The game should be visually appealing, responsive, and easy to navigate, ensuring a smooth user experience for both desktop and mobile users.

## 📖 User Stories
- As a player, I want to see a 3x3 grid so that I can play Tic-Tac-Toe.
- As a player, I want to place 'X' or 'O' on the grid by clicking on empty squares.
- As a player, I want to see whose turn it is at the top of the board.
- As a player, I want to see a message when the game is over, indicating the winner or a draw.
- As a player, I want to be able to restart the game after it ends.

## 🧩 Feature Categories
✅ 1. Core Gameplay Features
- **Game Board:** A 3x3 grid with clickable squares. Each click places an 'X' or 'O' depending on the turn.
- **Turn Management:** Alternates between Player X and Player O. Displays the current player at the top.
- **Win/Draw Detection:** Detects 8 winning patterns (rows, columns, diagonals) and determines if all squares are filled without a winner → Draw.
- **Game Over State:** Displays a message ("Player X Wins!", "Player O Wins!", or "It’s a Draw!") and disables further clicks when the game ends.
- **Restart Button:** Resets the board and starts a new game.

✅ 2. UI/UX Requirements
- Minimalist Design using Tailwind CSS.
- Board Layout: centered 3x3 grid with large squares.
- Current Turn Indicator: text above the board.
- End Game Modal/Message: appears on win/draw.
- Restart Button: visible after game ends.
- Optional Extra: Dark Mode toggle.

## ⚙️ Technical Requirements
- **Frontend:**
  - Framework: React JS (functional components + hooks).
  - Styling: Tailwind CSS.
  - State Management: React useState + custom hooks.
- **Game Logic:**
  - Board State: Array of 9 elements [null | 'X' | 'O'].
  - Turn State: Boolean or string ('X' | 'O').
  - Winner Detection: Predefined array of winning index patterns.

## 🛠️ Development Tasks
- **Project Setup:**
  - Initialize React app with Vite or CRA.
  - Install Tailwind CSS.
  - Configure ESLint + Prettier.
- **Game Board Component:**
  - Render 3x3 grid.
  - Handle click events.
- **Game Logic:**
  - Manage turns (X → O).
  - Prevent overwriting squares.
  - Check for win/draw after every move.
- **UI Components:**
  - Current turn display.
  - End game message.
  - Restart button.
- **Testing:**
  - Ensure win conditions work for rows, columns, diagonals.
  - Ensure draw condition triggers correctly.
  - Restart resets state properly.

## 📐 Acceptance Criteria
- **Core Gameplay:**
  - Players alternate turns.
  - Cannot overwrite filled square.
  - Game detects win correctly (all 8 patterns).
  - Game detects draw correctly.
  - Game shows end message.
  - Restart button resets everything.
- **Cross-Browser Compatibility:**
  - Works in modern browsers (Chrome, Firefox, Edge).

## 🚀 Deployment Instructions
- Build app with npm run build.
- Deploy app to a public URL (e.g., Vercel, Netlify).
- Ensure app is publicly accessible via browser.
- Game is playable end-to-end in browser.

## 🧩 System Components & Tasks
1. **Project Setup:**
  - Task: Initialize project.
  - Use Vite + React (preferred for speed).
  - Install Tailwind CSS.
  - Configure ESLint + Prettier.
  - Acceptance Criteria:
    - Running npm run dev starts React app.
    - Tailwind styling works.
2. **Game State Management:**
  - Schema:
    - type Player = 'X' | 'O';
    - type SquareValue = Player | null;
    - interface GameState {
      board: SquareValue[]; // 9 elements
      currentPlayer: Player;
      winner: Player | null;
      isDraw: boolean;
    }
  - Tasks:
    - Implement board state as useState (array of 9).
    - Track currentPlayer.
    - Add function checkWinner(board: SquareValue[]): Player | null.
    - Add function checkDraw(board: SquareValue[]): boolean.
  - Acceptance Criteria:
    - Board starts empty.
    - Current player alternates each turn.
    - Winner detected correctly across 8 patterns.
    - Draw detected when board full and no winner.
3. **UI Components:**
  - Components:
    - <Square /> → individual button for each cell.
    - <Board /> → renders 3x3 grid of squares.
    - <Game /> → main container, manages state and game flow.
  - Tasks:
    - Render clickable grid (3x3).
    - Show current player at top.
    - Show result message (Winner or Draw).
    - Show Restart button to reset state.
  - Acceptance Criteria:
    - Players can click squares to place X/O.
    - Current player label updates each turn.
    - Result message appears when game ends.
    - Restart button resets board + state.
4. **Game Logic:**
  - Winning Patterns:
    - const WIN_PATTERNS = [
      [0,1,2], [3,4,5], [6,7,8], // rows
      [0,3,6], [1,4,7], [2,5,8], // cols
      [0,4,8], [2,4,6]           // diagonals
    ];
  - Tasks:
    - Implement function to check win condition using WIN_PATTERNS.
    - Prevent overwriting filled squares.
    - Stop play once winner or draw detected.
  - Acceptance Criteria:
    - Cannot click already filled square.
    - Game stops