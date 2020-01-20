//       ***********************
//            INSTRUCTIONS
//       ***********************

// 1. Read the code below and figure out the data flow
// 2. Add in your code from the terminal app (check for win logic)
// 3. Look for the @TODO, to fix
// next to each @TODO you will find tasks that need to be finished
// 4. GET THIS GAME WORKING!!

let playerTurn = "O";
let board = [
	["", "", ""],
	["", "", ""],
	["", "", ""]
];
console.log(board);

// parseInt is updating the board in JS
const addMarker = (id) => {
	// debugger
	// console.log(`We'll place a mark on square: ${id}`);
	// console.log("id", id);
	// checkForWin();
	const row = parseInt(id.charAt(0));
	const column = parseInt(id.charAt(2));
	// checkForWin(); //gives alert but does add marker doesn't show until clicking the OK on the alert
	if (playerTurn === "O") {
		playerTurn = "X";
	} else {
		playerTurn = "O";
	}
	// checkForWin(); // marker  shows but alert doesn't show until until clicking an empty square
	document.getElementById(id).innerHTML = playerTurn;
	checkForWin(); //marker  shows but alert doesn't show until until clicking an empty square
	board[row][column] = playerTurn; // updates the 'let board' JS
	// checkForWin(); //alert is thown but marker doens show up until cklicking the OK on the alert
	console.log("board", board);
};

// is called when a square is clicked. "this" = element here.  This function updates the HTML
const handleClick = (element) => {
	if (!document.getElementById(element.id).innerHTML) {
		addMarker(element.id);
	}
};

const checkForWin = () => {
	// calls each checkForWin possibility and if any are true gives a page alert,
	if (horizontalWin() || verticalWin() || diagonalWin()) {
		// **BONUS** you could make the dismissal of this alert window reset the board...
		alert(`Player ${playerTurn} won!`);
		// document.getElementById("win").innemarHTML = `${playerTurn} WINS!`; //this works but the checkForWin needs to be initalized after
		{
			window.location.reload();
		}
	}
};

const horizontalWin = () => {
	// console.log("horizontalWin");
	if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
		return true;
	}
	// console.log(board[0 && 0]);
	if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
		return true;
	}
	if (board[0][2] == "X" && board[1][1] == "X" && board[2][2] == "X") {
		return true;
	}
	if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
		return true;
	}
	if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") {
		return true;
	}
	if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") {
		return true;
	}
};

const verticalWin = () => {
	// console.log("verticalWin");

	if (board[0][0] == "X" && board[1][0] == "X" && board[2][0] == "X") {
		console.log("here1");
		return true;
	}
	if (board[0][1] == "X" && board[1][1] == "X" && board[2][1] == "X") {
		return true;
	}
	if (board[0][2] == "X" && board[1][2] == "X" && board[2][2] == "X") {
		return true;
	}
	if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
		console.log("here2");
		return true;
	}
	if (board[0][1] == "O" && board[1][1] == "O" && board[2][1] == "O") {
		return true;
	}
	if (board[0][2] == "O" && board[1][2] == "O" && board[2][2] == "O") {
		return true;
	}
};

const diagonalWin = () => {
	// console.log("diagonalWin");

	if (board[0][0] == "X" && board[1][1] == "X" && board[2][2] == "X") {
		// console.log("here1");
		return true;
	}
	if (board[0][2] == "X" && board[1][1] == "X" && board[2][0] == "X") {
		console.log("here2");
		return true;
	}
	if (board[0][0] == "O" && board[1][1] == "O" && board[2][2] == "O") {
		console.log("here3");
		return true;
	}
	if (board[0][2] == "O" && board[1][1] == "O" && board[2][0] == "O") {
		console.log("here4");
		return true;
	}
};

const resetBoard = () => {
	playerTurn = 0;
	// sanity check: this tells us the function is being called
	console.log("the board was cleared!");

	// collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp
	const squares = document.getElementsByTagName("TD");

	// loops over the HTML Collections and clears out the Xs and Os.
	for (i = 0; i < squares.length; i++) {
		console.log(squares[i]);
		squares[i].innerHTML = null;
	}

	// @TODO, Your code here: make sure to reset the array of arrays to empty for a new game
};

// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"
