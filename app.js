//let initialState;

const gameState = {
  players: ['x', 'o'], 
  board: [  //Boxes? empty strings?
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}
//determine which cell wasw clicked on the front end; it will go through a helper function that will help you determine whihc
//cell in the virtual date (gamedstate.board)
const boxes = Array.from(document.querySelectorAll('#gameGrid'));
const playAgainButton = document.getElementById('playAgain');
const statusDisplay = document.getElementById('gameStatus'); 
const boxDisplay = document.getElementsByClassName('box'); //made this element

const currentPlayer = gameState.players['x'];
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
  //let board = gameState['board']; got rid of this
  //let currentPlayer;
  
  boxDisplay.innterText = "null"; //added this
  statusDisplay.innerText = "Choose a box";
  renderState(boxes);
}

buildInitialState()



function renderState(boxes){
  //for(let i = 0; i < boxes.length; i++){ 
  //boxes[i].innerText = (null); 
  //}
}

for(let i=0; i < boxes.length; i++){
boxes[i].addEventListener('click', onBoardClick)
}  


function onBoardClick(event){
  let targetedBox = event.target; 
  //console.log(targetedBox)
  let playerSelection = currentPlayer
  if(playerSelection = true && targetedBox == null){
    boxDisplay.innerHTML = playerSelection;
  } else {
    statusDisplay.innerHTML = "Pick another box"; 
  }
  renderState();
  //checkResults();
  switchTurns();

}  
//document.getElementById('gameGrid').addEventListener('click', switchTurns)

function switchTurns(currentPlayer){ 
  if(currentPlayer = gameState.players['x']){
    let currentPlayer = gameState.players['o'];
  } else {
    let currentPlayer = gameState.players['x'];
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



function checkResults(currentPlayer){ //what passes in here? //else statements necessary
  if(boxes[0] === currentPlayer && boxes[1] === currentPlayer && boxes[2] === currentPlayer) {
    statusDisplay.innerText = `${currentPlayer} wins`;
      }
  if(boxes[0] === currentPlayer && boxes[3] === currentPlayer && boxes[6] === currentPlayer) {
    statusDisplay.innerText = `${currentPlayer} wins`;
      }
  if(boxes[0] === currentPlayer && boxes[4] === currentPlayer && boxes[8] === currentPlayer) {
    statusDisplay.innerText = `${currentPlayer} wins`;
      }
  if(boxes[2] === currentPlayer && boxes[5] === currentPlayer && boxes[8] === currentPlayer) {
    statusDisplay.innerText = `${currentPlayer} wins`;
      }
  if (boxes[6] === currentPlayer && boxes[7] === currentPlayer && boxes[8] === currentPlayer) {
    statusDisplay.innerText = `${currentPlayer} wins`;
      }
  if (boxes[1] === currentPlayer && boxes[4] === currentPlayer && boxes[7] === currentPlayer) {
    statusDisplay.innerText = `${currentPlayer} wins`;
      }
  if (boxes[3] === currentPlayer && boxes[4]=== currentPlayer && boxes[5] === currentPlayer) {
    statusDisplay.innerText = `${currentPlayer} wins`;
      }
  if (boxes[2] === currentPlayer && boxes[4] === currentPlayer && boxes[6] === currentPlayer) {
    statusDisplay.innerText = `${currentPlayer} wins`;
      }

        //something here that closes the game/or resets the board  maybe then?

}

playAgainButton.addEventListener('click', playAgain)

function playAgain(){
  buildInitialState();
}

    
singlePlayer.addEventListener('click', onePlayer())

function onePlayer(){ 
  let player1 = gameState.players['x'];
  let computer = gameState.players['o'];
  let currentPlayer = player1;

  //let board/boxes ??
  //somehow call onBoardClick



  const cornerBoxes = [boxes[0], boxes[2], boxes[6], boxes[8]];
  
  let playerSelection = []; //not sure how to get number of player selection
 
  for(i = 0; i < playerSelection.length; i++){
    if(playerSelection < 1){  
    if(boxes[0] === player1 || boxes[2] === player1 || boxes[6] === player1 || boxes[8] === player1){
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
}

  
