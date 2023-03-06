const cellElements = document.querySelectorAll('')
let gameState = {
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    player: 1,
    // Maybe a current Player?
    // A game status?? 'isPlaying' or 'over'
    // Any other data your game logic depends on?
  };

  function renderGame() {
    // Call this function after you've changed your state values
    // Make references to DOM elements, and set the innerText,
    // or innerHTML to reflect our gameState.board
  }

  function switchPlayer() {
    if (gameState.player === 1){
        gameState.player = 2;
    }else{
        gameState.player = 1;
    }
  }
  
  function checkWin() {
    for(let i = 0; i <= 2; i++){
        if(board[i][i] === null){
            continue;
        }
        if(gameState.board[i].every((cellRow) => gameState.board[i][0] === cellRow)){
            return true;
        }
        if(gameState.board.map((cellList) => cellList[i]).every((cellColumn) => gameState.board[0][i] === cellColumn)){
            return true;
        }
    }
    if(gameState.board[0][0]===gameState.board[1][1] && gameState.board[1][1]===gameState.board[2][2] && gameState.board[0][0]===gameState.board[2][2]){
        return true;
    }
    if(gameState.board[0][2]===gameState.board[1][1] && gameState.board[1][1]===gameState.board[2][0] && gameState.board[0][2]===gameState.board[2][0]){
        return true;
    }
    return false;
  }

  board.addEventListener("click", function (event) {
    // Figure out how to get the coordinates off event object (e.target.value)
    // Use those coordinates to reference indexes in our gameState.board
    // Set the position in our board to the current player
  });