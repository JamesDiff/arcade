/* In all of the games below you must figure out:

What is the starting state?
How do I display the state of the game to the user?
What controls/interface to I make available to the user?
How does each interaction update the state?
In many ways, this is the "game loop": show state -> wait for input -> update state -> go to step 1 */

// state
let initialState;
const statusDisplay = document.getElementById('#gameStatus'); //do i need # for id?
const gameState = {
  players: ['x', 'o'], 
  board: [  
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}
let currentPlayer = gameState.players['x']
const boxes = Array.from(document.querySelectorAll('#gameGrid'));
const playAgainButton = document.getElementById('#playAgain')


/*const winningArrays = [    
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] ; */



function buildInitialState(currentPlayer) {
  let board = gameState[board]
  let currentPlayer;
}

buildInitialState()


function renderState(boxes){
  for(let i = 0; i < boxes.length; i++){
    boxes[i].innerText = ('x' || 'o')
  }
}
  
boxes.addEventListener('click', onBoardClick)

function onBoardClick(){
  let targetedBox = boxes[i]; 
  let playerSelection = currentPlayer
  if(playerSelection = true && targetedBox === null){
    targetedBox.innerText = playerSelection;
  } else {
    statusDisplay.innerHTML = "Pick another box"; 
  }
  renderState()
}  

document.getElementById('gameGrid').addEventListener('click', switchTurns)

function switchTurns(currentPlayer){ 
  if(currentPlayer = 'x'){
    let currentPlayer = 'o';
  } else {
    if(currentPlayer = !'x'){
      let currentPlayer = x;
    }
  }
  return currentPlayer
}

//$('.board').on('click', onBoardClick); 

/* availableSpaces = [
  [0,0],
  [0,1],
  [0,2],
  [1,0],
  [1,1],
  [1,2],
  [2,0],
  [2,1],
  [2,2],
]; */



function checkResults(){

    if(boxes[0] === currentPlayer && boxes[1] === currentPlayer && boxes[2] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins`;
      }
    if(boxes[0] === currentPlayer && boxes[3] === currentPlayer && boxes[6] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins`;
      }
    if(boxes[0] === currentPlayer && boxes[4] === currentPlayer && boxes[8] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins`;
      }
    if(boxes[2] === currentPlayer && boxes[5] === currentPlayer && boxes[8] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins`;
      }
    if (boxes[6] === currentPlayer && boxes[7] === currentPlayer && boxes[8] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins`;
      }
    if (boxes[1] === currentPlayer && boxes[4] === currentPlayer && spaces[7] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins`;
      }
    if (boxes[3] === currentPlayer && boxes[4]=== currentPlayer && boxes[5] === currentPlayer) {
        strategy.innerText = `${currentPlayer} wins`;
      }
    if (boxes[2] === currentPlayer && boxes[4] === currentPlayer && boxes[6] === currentPlayer) {
        strategy.innerText = `${currentPlayer} wins`;
      }

}

playAgainButton.addEventListener('click', playAgain)

function playAgain(){
  let currentPlayer = player1;
  for(let value of board){
    value = null;
  }
  for(let value of boxes){
    value = null;
  }
}
    
singlePlayer.addEventListener('click', buttonClicked)

function onePlayer(){  
  let currentPlayer = player1;
  let player1 = 'x'
  let computer = 'o';
  const cornerBoxes = [boxes[0], boxes[2], boxes[6], boxes[8]];
  
  let playerSelection = []; //not sure how to get their answers
 
  for(i = 0; i < playerSelection.length; i++){}

  if(playerSelection < 1){  /
    if(boxes[0] === player1 || boxes[2] === player1) || boxes[6] === player1 || boxes[8] === player1){
      boxes[4].push(computer);
    }
    if (boxes[4] === currentPlayer) {
      cornerBoxes[Math.floor(cornerBoxes.length * Math.random())].push(computer);
    }
    if (boxes[1] === currentPlayer || boxes[3] === currentPlayer || boxes[5] === currentPlayer || boxes[7] === currentPlayer) {
      boxes[Math.floor(boxes.length * Math.random())].push(computer)
    }
  } else {
    if(playerSelection > 0){ //starting index of zero?
      boxes[Math.floor(boxes.length * Math.random())].push(computer)
    }
  }
};
