var squareWidth = document.getElementById("a1").clientWidth;
var squares = document.getElementsByClassName("square");
for (i=0; i<squares.length; i++) {
	squares[i].style.height = squareWidth + "px";	
}
console.log(squares);
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

var player_one_message = "Player One won the game!";
var player_two_message = "Player Two won the game!";
var gameHeader = document.getElementById("game-header");
var playerOneMarking = [];
var playerTwoMarking = [];
var whosTurn = 1;
var onePlayerGame = false;
var twoPlayerGame = false;
var canPlay = false;

var onePlayer = function(){
	canPlay = true;
	onePlayerGame = true;
	gameHeader.innerHTML = "One Player: Player 1's Turn";
};

var twoPlayer = function(){
	canPlay=true;
	twoPlayerGame = true;
	gameHeader.innerHTML = "Two Player"
}

function addSymbol(element) {
	if(canPlay == true){
		if(onePlayerGame == true){
			if(element.innerHTML == '') {
				if(whosTurn == 1) {
					element.innerHTML = "X";
					transitionFont(element);
					whosTurn = 2;
					gameHeader.innerHTML = "Player 2's Turn";
					gameHeader.className = "playerTwo";
					element.classList.remove("empty");
					element.classList.add('p1');
					playerOneMarking.push(element.id);
					checkWin();
					computersTurn();
				}
			}else{
				gameHeader.innerHTML = "This box is taken";
				gameHeader.className= "red";
				}
		}
		else if (twoPlayerGame == true){
			if(element.innerHTML == '') {
				if(whosTurn == 1) {
					element.innerHTML = "X";
					transitionFont(element);
					whosTurn = 2;
					gameHeader.innerHTML = "Player 2's Turn";
					gameHeader.className = "playerTwo";
					element.classList.remove("empty");
					element.classList.add('p1');
					playerOneMarking.push(element.id);
				}else{
					element.innerHTML = "0";
					transitionFont(element);
					whosTurn = 1;
					gameHeader.innerHTML = "Player 1's Turn"
					gameHeader.className = "playerOne";
					element.classList.remove('empty');
					element.classList.add('p2');
					playerTwoMarking.push(element.id);
				}
				checkWin();
			}else{
				gameHeader.innerHTML = "This box is taken";
				gameHeader.className= "red";
				}
			}
	}else {
			gameHeader.innerHTML = "Please choose one or two player.";
		}
}

function computersTurn() {
	if (canPlay == true){
		setTimeout(function(){
			var combination;
				for (i=0;i<winners.length; i++) {
					var playerOneRowCount = 0;
					combination = winners[i];
						for(j=0; j<combination.length; j++) {
							if(playerOneMarking.indexOf(combination[j]) > -1){
								playerOneRowCount++;
							}
						}//looped through this winning combination
						//got number of player one marks in this winning combination
						if(playerOneRowCount == 2){
							for(j=0; j<combination.length; j++) {
								var emptyElement = document.getElementById(combination[j]);
								if(emptyElement.classList.contains('empty')){
									//mark O there.
									//end this function
									emptyElement.innerHTML = "O"; 
									transitionFont(emptyElement);
									whosTurn = 1;
									gameHeader.innerHTML = "It is Player 1's turn";
									gameHeader.className = "playerOne";
									emptyElement.classList.remove("empty");
									emptyElement.classList.add("p2");
									playerTwoMarking.push(emptyElement.id);
									checkWin();
									return;
								}
								else{
									//keep looping through this combination
								}
							}//none in loop, 
						}else{
							//playerOne doesn't have two marked in this winning combination
						}
						//check the other winning combinations
						//run through all of them and if playerONe doesn't have two in a winning combination
						//continue function and mark a random element with O
					}		
				
							var arrayOfEmptySquares = document.getElementsByClassName("empty");
							var randomEmptySquareIndex = Math.floor(Math.random() * arrayOfEmptySquares.length);
							var element = arrayOfEmptySquares[randomEmptySquareIndex];
							element.innerHTML = "O"; 
							transitionFont(element);
							whosTurn = 1;
							gameHeader.innerHTML = "It is Player 1's turn";
							gameHeader.className = "playerOne";
							element.classList.remove("empty");
							element.classList.add("p2");
							playerTwoMarking.push(element.id);
							checkWin();
		}, 1000);
	}
};

function checkWin() {
var thisWinCombination;
	for (i=0;i<winners.length; i++) {
		playerOneRowCount = 0;
		playerTwoRowCount = 0;
		thisWinCombination = winners[i];
		for(j=0; j<thisWinCombination.length; j++) {
			if(playerOneMarking.indexOf(thisWinCombination[j]) > -1){
				playerOneRowCount++;
			}
			else if (playerTwoMarking.indexOf(thisWinCombination[j]) > -1) {
				playerTwoRowCount++;
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
	var counter = 0;
	for(var k = 0; k < squares.length; k++){
		if (squares[k].classList.contains('empty')){
			counter++;
		}
	}
	if (counter === 0){
		document.getElementById("onePlayerButton").disabled = true;
		document.getElementById("twoPlayerButton").disabled = true;
		canPlay = false;
		setTimeout(function(){
		for(i=0; i<squares.length; i++){
			document.getElementById(squares[i].id).classList.add('winner');
		}
		gameHeader.innerHTML = "TIED";
	 }, 1000);
	}
}

function gameOver(combo, message) {
	document.getElementById("onePlayerButton").disabled = true;
	document.getElementById("twoPlayerButton").disabled = true;
	canPlay = false;
	setTimeout(function(){
		for(i=0; i<combo.length; i++){
			document.getElementById(combo[i]).classList.add('winner');
		}
		gameHeader.innerHTML = message;
	 }, 1000);
}

function reset(){
	document.getElementById("onePlayerButton").disabled = false;
	document.getElementById("twoPlayerButton").disabled = false;
	for (var i=0;i<squares.length;i++){
		squares[i].innerHTML = "";
		if(!squares[i].classList.contains('empty')){
			squares[i].classList.add('empty');
		}
		if(squares[i].classList.contains('font')){
			squares[i].classList.remove('font');
		}
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
	gameHeader.innerHTML = "NEW GAME: Please choose one or two player.";
	playerOneMarking = [];
	playerTwoMarking = [];
	whosTurn = 1;
	onePlayerGame = false;
	twoPlayerGame = false;
}

function transitionFont(element){
	element.classList.add('font');
}


