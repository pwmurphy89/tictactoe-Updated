var winner = [
	["a1","a2","a3"],
	["b1","b2","b3"],
	["c1","c2","c3"],
	["a1","b1","c1"],
	["a2","b2","c2"],
	["a3","b3","c3"],
	["a1","b2","c3"],
	["a3","b2","c1"]



];

var squareWidth = document.getElementById("a1").clientWidth;
console.dir(squareWidth);
var squares = document.getElementsByClassName("square");
console.dir(squares);



for (i=0; i<squares.length; i++) {
	squares[i].style.height = squareWidth + "px";
	

}


var playerOneMarking = [];
var playerTwoMarking = [];
var whosTurn = 1;

function addSymbol(element) {
	var gameHeader = document.getElementById("game-header");
	
	if(element.innerHTML == '') {
		


		if(whosTurn == 1) {

			element.innerHTML = "X";
			whosTurn = 2;
			gameHeader.innerHTML = "Player 2's Turn";
			gameHeader.className = "playerTwo";
			element.classList.remove("empty");
			element.classList.add('p1');
			playerOneMarking.push(element.id);

		} else{

			element.innerHTML = "0";
			whosTurn = 1;
			gameHeader.innerHTML = "Player 1's Turn"
			gameHeader.className = "playerOne";
			element.classList.remove('empty');
			element.classList.add('p2');
			playerTwoMarking.push(element.id);

		}

		} else {
			
			gameHeader.innerHTML = "This box is taken";
			gameHeader.className= "red";
		}

		function checkWin() {
			var playerOneRowCount = 0;
			var playerTwoRowCount = 0;
			var thisWinCombination;

			for (i=0;i<winner.length; i++) {
				playerOneRowCount = 0;
				playerTwoRowCount = 0;
				thisWinCombination = winners[i];

			
				for(j=0; j<thisWinCombination.length; j++) {
					
					if(playerOneMarking.indexOf(thisWinCombination[j]) > -1){
						playerOneRowCount++;

					} else if (playerTwoMarking.indexOf(thisWinCombination[j]) > -1) {
						playerTwoRowCount++;
					}

				}

				if(playerOneRowCount == 3 || playerTwoRowCount == 3) {
					gameOver(thisWinCombination);

				}
			}

		}

		}
			function gameOver(combo) {
				var comboString;
				var gameheader = document.getElementById("game-header");
				for(i=0; i<combo.length; i++){
					document.getElementById(combo[i]).classList.add('winner');
				}
				gameHeader.innerHTML = "Player One, won the game!";
			}


function computersTurn() {
	var arrayOfEmptySquares = document.getElementsbyClassName("empty");
	var randomEmptySquareIndex = Math.floor(Math.random() * arrayOfEmptySquares.length);
	element = arrayOfEmptySquares[randomEmptySquareIndex];
	element.innerHTML = "O"; 
	whosTurn = 1;
	gameHeader.innerHTML = "It is Player 1's turn";
	gameHeader.className = "playerOne";
	element.classList.remove("empty");
	element.classList.add("p2");
	playerTwoMarking.push(element.id);
	checkWin();
}




	element.innerHTML = "0";
	whosTurn = 1;
	gameheader.innerHTML

}
	

