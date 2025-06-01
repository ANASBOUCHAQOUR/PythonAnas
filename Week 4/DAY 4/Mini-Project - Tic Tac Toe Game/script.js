// Game variables
let playerSymbol = '';
let computerSymbol = '';
let difficulty = '';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = false;
let isPlayerTurn = true;

// Winning combinations
const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];

// DOM elements
const setupSection = document.getElementById('setupSection');
const difficultySection = document.getElementById('difficultySection');
const gameInfo = document.getElementById('gameInfo');
const gameBoard_DOM = document.getElementById('gameBoard');
const gameResult = document.getElementById('gameResult');
const turnIndicator = document.getElementById('turnIndicator');

// Choose symbol function
function chooseSymbol(symbol) {
    playerSymbol = symbol;
    computerSymbol = symbol === 'X' ? 'O' : 'X';
    
    // Update UI
    document.getElementById('playerSymbol').textContent = playerSymbol;
    document.getElementById('computerSymbol').textContent = computerSymbol;
    
    // Show selected symbol
    document.querySelectorAll('.symbol-btn').forEach(btn => btn.classList.remove('selected'));
    document.getElementById(`choose${symbol}`).classList.add('selected');
    
    // Show difficulty selection
    difficultySection.style.display = 'block';
}

// Set difficulty function
function setDifficulty(level) {
    difficulty = level;
    document.getElementById('currentDifficulty').textContent = level.charAt(0).toUpperCase() + level.slice(1);
    
    // Start game
    startGame();
}

// Start game function
function startGame() {
    gameActive = true;
    isPlayerTurn = true;
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    
    // Hide setup, show game
    setupSection.style.display = 'none';
    gameInfo.style.display = 'block';
    gameBoard_DOM.style.display = 'block';
    gameResult.style.display = 'none';
    
    // Clear board
    document.querySelectorAll('.cell').forEach((cell, index) => {
        cell.textContent = '';
        cell.className = 'cell';
        cell.onclick = () => makeMove(index);
    });
    
    updateTurnIndicator();
}

// Make move function
function makeMove(index) {
    if (!gameActive || !isPlayerTurn || gameBoard[index] !== '') {
        return;
    }
    
    // Player move
    gameBoard[index] = playerSymbol;
    updateCell(index, playerSymbol);
    
    // Check game outcome
    const outcome = checkGameOutcome();
    if (outcome) {
        endGame(outcome);
        return;
    }
    
    // Switch to computer turn
    isPlayerTurn = false;
    updateTurnIndicator();
    
    // Computer move with delay for better UX
    setTimeout(() => {
        computerMove();
    }, 500);
}

// Computer move function
function computerMove() {
    if (!gameActive) return;
    
    let move;
    if (difficulty === 'easy') {
        move = getRandomMove();
    } else {
        move = getBestMove();
    }
    
    if (move !== -1) {
        gameBoard[move] = computerSymbol;
        updateCell(move, computerSymbol);
        
        // Check game outcome
        const outcome = checkGameOutcome();
        if (outcome) {
            endGame(outcome);
            return;
        }
        
        // Switch back to player
        isPlayerTurn = true;
        updateTurnIndicator();
    }
}

// Get random move (easy mode)
function getRandomMove() {
    const emptyCells = gameBoard
        .map((cell, index) => cell === '' ? index : -1)
        .filter(index => index !== -1);
    
    if (emptyCells.length === 0) return -1;
    
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
}

// Get best move (hard mode) - Minimax algorithm
function getBestMove() {
    let bestScore = -Infinity;
    let bestMove = -1;
    
    for (let i = 0; i < 9; i++) {
        if (gameBoard[i] === '') {
            gameBoard[i] = computerSymbol;
            const score = minimax(gameBoard, 0, false);
            gameBoard[i] = '';
            
            if (score > bestScore) {
                bestScore = score;
                bestMove = i;
            }
        }
    }
    
    return bestMove;
}

// Minimax algorithm
function minimax(board, depth, isMaximizing) {
    const result = checkWinner();
    
    if (result === computerSymbol) return 10 - depth;
    if (result === playerSymbol) return depth - 10;
    if (isBoardFull()) return 0;
    
    if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = computerSymbol;
                const score = minimax(board, depth + 1, false);
                board[i] = '';
                bestScore = Math.max(score, bestScore);
            }
        }
        return bestScore;
    } else {
        let bestScore = Infinity;
        for (let i = 0; i < 9; i++) {
            if (board[i] === '') {
                board[i] = playerSymbol;
                const score = minimax(board, depth + 1, true);
                board[i] = '';
                bestScore = Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
}

// Update cell display
function updateCell(index, symbol) {
    const cell = document.getElementById(`cell-${index}`);
    cell.textContent = symbol;
    cell.className = `cell ${symbol.toLowerCase()}`;
}

// Check game outcome
function checkGameOutcome() {
    const winner = checkWinner();
    if (winner) {
        return winner === playerSymbol ? 'player' : 'computer';
    }
    
    if (isBoardFull()) {
        return 'tie';
    }
    
    return null;
}

// Check for winner
function checkWinner() {
    for (const combo of winCombos) {
        const [a, b, c] = combo;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            // Highlight winning combination
            highlightWinningCells(combo);
            return gameBoard[a];
        }
    }
    return null;
}

// Highlight winning cells
function highlightWinningCells(combo) {
    combo.forEach(index => {
        document.getElementById(`cell-${index}`).classList.add('winning');
    });
}

// Check if board is full
function isBoardFull() {
    return gameBoard.every(cell => cell !== '');
}

// Update turn indicator
function updateTurnIndicator() {
    if (!gameActive) return;
    
    turnIndicator.textContent = isPlayerTurn ? 'Your turn!' : 'Computer is thinking...';
    turnIndicator.style.color = isPlayerTurn ? '#667eea' : '#764ba2';
}

// End game function
function endGame(outcome) {
    gameActive = false;
    
    // Disable all cell clicks
    document.querySelectorAll('.cell').forEach(cell => {
        cell.onclick = null;
    });
    
    // Show result
    let message = '';
    switch (outcome) {
        case 'player':
            message = '🎉 You Win!';
            break;
        case 'computer':
            message = '🤖 Computer Wins!';
            break;
        case 'tie':
            message = '🤝 It\'s a Tie!';
            break;
    }
    
    document.getElementById('resultMessage').textContent = message;
    gameResult.style.display = 'block';
    turnIndicator.textContent = 'Game Over';
}

// Restart game function
function restartGame() {
    // Reset game state
    playerSymbol = '';
    computerSymbol = '';
    difficulty = '';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameActive = false;
    isPlayerTurn = true;
    
    // Reset UI
    setupSection.style.display = 'block';
    difficultySection.style.display = 'none';
    gameInfo.style.display = 'none';
    gameBoard_DOM.style.display = 'none';
    gameResult.style.display = 'none';
    
    // Clear symbol selection
    document.querySelectorAll('.symbol-btn').forEach(btn => btn.classList.remove('selected'));
    
    // Clear board
    document.querySelectorAll('.cell').forEach(cell => {
        cell.textContent = '';
        cell.className = 'cell';
    });
}