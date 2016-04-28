var squareWidth = document.getElementById("a1").clientWidth;
var squares = document.getElementsByClassName("square");
for (i=0; i<squares.length; i++) {
	squares[i].style.height = squareWidth + "px";	
}
var winners = [
	["a1","a2","a3"],
	["b1","b2","b3"],
	["c1","c2","c3"],
	["a1","b1","c1"],
	["a2","b2","c2"],
	["a3","b3","c3"],
	["a1","b2","c3"],
	["a3","b2","c1"]
];
var gameHeader = document.getElementById("game-header");
var playerOneMarking = [];
var playerTwoMarking = [];
var whosTurn = 1;
var onePlayerGame = false;
var twoPlayerGame = false;

var onePlayer = function(){
	onePlayerGame = true;
};

var twoPlayer = function(){
	twoPlayerGame = true;
}

function addSymbol(element) {
	if(onePlayerGame == true){
		if(element.innerHTML == '') {
			if(whosTurn == 1) {
				element.innerHTML = "X";
				whosTurn = 2;
				gameHeader.innerHTML = "Player 2's Turn";
				gameHeader.className = "playerTwo";
				element.classList.remove("empty");
				element.classList.add('p1');
				playerOneMarking.push(element.id);
				computersTurn();
			}
		}else{
			gameHeader.innerHTML = "This box is taken";
			gameHeader.className= "red";
			}
		checkWin();
	}
	if (twoPlayerGame == true){
		if(element.innerHTML == '') {
			if(whosTurn == 1) {
				element.innerHTML = "X";
				whosTurn = 2;
				gameHeader.innerHTML = "Player 2's Turn";
				gameHeader.className = "playerTwo";
				element.classList.remove("empty");
				element.classList.add('p1');
				playerOneMarking.push(element.id);
			}else{
				element.innerHTML = "0";
				whosTurn = 1;
				gameHeader.innerHTML = "Player 1's Turn"
				gameHeader.className = "playerOne";
				element.classList.remove('empty');
				element.classList.add('p2');
				playerTwoMarking.push(element.id);
			}
		}else{
			gameHeader.innerHTML = "This box is taken";
			gameHeader.className= "red";
			}
		checkWin();
	}
}

function computersTurn() {
	var arrayOfEmptySquares = document.getElementsByClassName("empty");
	var randomEmptySquareIndex = Math.floor(Math.random() * arrayOfEmptySquares.length);
	var element = arrayOfEmptySquares[randomEmptySquareIndex];
	element.innerHTML = "O"; 
	whosTurn = 1;
	gameHeader.innerHTML = "It is Player 1's turn";
	gameHeader.className = "playerOne";
	element.classList.remove("empty");
	element.classList.add("p2");
	playerTwoMarking.push(element.id);
	checkWin();
}

function checkWin() {
var playerOneRowCount = 0;
var playerTwoRowCount = 0;
var thisWinCombination;
var player_one_message = "Player One won the game!";
var player_two_message = "Player Two won the game!"
	for (i=0;i<winners.length; i++) {
		playerOneRowCount = 0;
		playerTwoRowCount = 0;
		thisWinCombination = winners[i];
		// console.log(thisWinCombination);
		for(j=0; j<thisWinCombination.length; j++) {
			// console.log(thisWinCombination[j]);
			if(playerOneMarking.indexOf(thisWinCombination[j]) > -1){
				playerOneRowCount++;
			}
			else if (playerTwoMarking.indexOf(thisWinCombination[j]) > -1) {
				playerTwoRowCount++;
				console.log(playerTwoRowCount);
			}
			if(playerOneRowCount === 3){
				gameOver(thisWinCombination, player_one_message);
				return thisWinCombination;
			} 
			if(playerTwoRowCount === 3) {
				gameOver(thisWinCombination, player_two_message);
				return thisWinCombination;
			}
		}
	}
}


function gameOver(combo, message) {
	for(i=0; i<combo.length; i++){
		document.getElementById(combo[i]).classList.add('winner');
	}
	gameHeader.innerHTML = message;
}

function reset(){
	for (var i=0;i<squares.length;i++){
		squares[i].innerHTML = "";
		if(squares[i].classList.contains('winner')){
			squares[i].classList.remove("winner");
		}
		if(squares[i].classList.contains('p1')){
			squares[i].classList.remove("p1");
		}
		if(squares[i].classList.contains('p2')){
			squares[i].classList.remove("p2");
		}
	}
	console.log(squares);
	gameHeader.innerHTML = "NEW GAME";
	playerOneMarking = [];
	playerTwoMarking = [];
	whosTurn = 1;
	onePlayerGame = false;
	twoPlayerGame = false;
}
	


