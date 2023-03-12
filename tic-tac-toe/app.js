let gameState = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]

let player = 1;
let  gameOver = false;

const cellElements = document.querySelectorAll(".cell")

//Event Listener
cellElements.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    placeMarker(index);
  })
}) 

function placeMarker(index){
  let col = index % 3
  let row = (index - col) / 3
    if(gameState[row][col] == 0 && gameOver == false){
    gameState[row][col] = player;
    player *= -1;
    drawMarkers();
    checkResults();
  }
}

function drawMarkers(){
  for (let row = 0; row < 3; row++){
    for (let col = 0; col < 3; col++){
      if (gameState [row][col] == 1){
        cellElements[(row * 3) + col].classList.add("cross");
      } else if(gameState[row][col] == -1){
        cellElements[(row * 3) + col].classList.add("circle");
      }
    }
  }
}

function checkResults(){
  for (let i = 0; i < 3; i++){
    let rowSum = gameState[i][0] +  gameState[i][1] + gameState[i][2];
    let colSum = gameState[0 ][i] +  gameState[1][i] + gameState[2][i];
    if (rowSum == 3 || colSum == 3){
      endGame(1);
      return
    }else if(rowSum == -3 || colSum == -3){
      endGame(2);
      return
    }
  }
  let diagonalSum1 = gameState[0][0] +  gameState[1][1] + gameState[2][2];
  let diagonalSum2 = gameState[0][2] +  gameState[1][1] + gameState[2][0];
  if (diagonalSum1 == 3 || diagonalSum2 == 3){
    endGame(1);
    return
  }else if(diagonalSum1  == -3 || diagonalSum2 == -3){
    endGame(2);
    return
  }
  if (gameState[0].indexOf(0) == -1 &&
      gameState[1].indexOf(0) == -1 &&
      gameState[2].indexOf(0) == -1){
        endGame(0);
        return
      }
}

function endGame(winner){
  gameOver = true;
  const resultElement = document.getElementById("result")
  if(winner == 0){
    resultElement.innerText = "It's a Tie" 
  }else {
    resultElement.innerText = `Player ${winner} wins!`
  }
}