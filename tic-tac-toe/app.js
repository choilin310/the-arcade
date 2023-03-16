let gameState = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
]
var randomNumber = Math.random() * 2;
// const players = [-1,1]
let player = randomNumber < 1 ? -1 : 1;
let  gameOver = false;

// const randomPlayer = players[Math.floor(Math.random() * players.length)]


const cellElements = document.querySelectorAll(".cell")
const resultElement = document.getElementById("result")
const player1NameElement = document.getElementById("player1");
const player2NameElement = document.getElementById("player2");
const submitNamesButton = document.getElementById("submitNames");

let player1Name = "";
let player2Name = "";

submitNamesButton.addEventListener("click", () => {
  player1Name = player1NameElement.value;
  player2Name = player2NameElement.value;
});

//Event Listener
cellElements.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    placeMarker(index);
  })
}) 

//function to indicate what your clicking on
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

//Function to apply the correct markers
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

//Checking the results
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

//Ending the Game
function endGame(winner){
  gameOver = true;
  if(winner == 0){
    resultElement.innerText = "It's a Tie" 
  }else {
    resultElement.innerText = `${winner === 1 ? player1Name : player2Name} wins!`
  }
}

//Restart Game
const restartButton = document.getElementById("restartButton")

restartButton.addEventListener("click", () => {
  gameState = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]
  player = randomNumber < 1 ? -1 : 1;
  console.log(player);
  gameOver = false;

  cellElements.forEach(cell => {
    cell.classList.remove("cross", "circle")
  })
  resultElement.innerText = ""
  player1Name = "";
  player2Name = "";
  player1NameElement.value = "";
  player2NameElement.value = "";
  location.reload()
})