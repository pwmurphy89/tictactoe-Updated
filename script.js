var squareWidth = document.getElementById("a1").clientWidth;
console.dir(squareWidth);
var squares = document.getElementsByClassName("square");
console.dir(squares);
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

function addSymbol(element) {
	if(userChoice is onePlayer){

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
	}else{//two player
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
			if(playerOneRowCount === 3 || playerTwoRowCount === 3) {
				gameOver(thisWinCombination);
				return thisWinCombination;
			}
		}
	}
}


function gameOver(combo) {
	for(i=0; i<combo.length; i++){
		document.getElementById(combo[i]).classList.add('winner');
	}
	// gameHeader.innerHTML = "Player One, won the game!";
}




// 	element.innerHTML = "0";
// 	whosTurn = 1;
// 	gameheader.innerHTML

	


