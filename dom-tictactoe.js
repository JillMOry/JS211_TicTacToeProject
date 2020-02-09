let playerTurn = "O";
let board = [
	["", "", ""],
	["", "", ""],
	["", "", ""]
];
console.log(board);

// parseInt is updating the board in JS
const addMarker = (id) => {
	// debugger;
	// console.log(`We'll place a mark on square: ${id}`);
	// console.log("id", id);
	const row = parseInt(id.charAt(0));
	const column = parseInt(id.charAt(2));
	// checkForWin(); //gives alert but does add marker doesn't show until clicking the OK on the alert
	if (playerTurn === "O") {
		playerTurn = "X";
	} else {
		playerTurn = "O";
	}
	//checkForWin(); //just for class
	board[row][column] = playerTurn; // updates the 'let board' JS
	document.getElementById(id).textContent = playerTurn;
	console.log("board", board);
	// checkForWin();
};

// is called when a square is clicked. "this" = element here.  This function updates the HTML
const handleClick = (element) => {
	if (!document.getElementById(element.id).textContent) {
		addMarker(element.id);
		checkForWin(); //keep this one.  Other placements would have HTML be updated but the alert not show until the next click and/or alert the incorrect winner
	}
};

const checkForWin = () => {
	// calls each checkForWin possibility and if any are true gives a page alert,
	if (horizontalWin() || verticalWin() || diagonalWin()) {
		// **BONUS** you could make the dismissal of this alert window reset the board...
		setTimeout(function() {
			alert(`Player ${playerTurn} won!`);
		}, 10); // setTimeout added to allow HTML to update before the alert appears.  If the alert appears first it stops operations until the 'ok' button is clicked and prevents the HTML from updating.
		{
			setTimeout(function() {
				window.location.reload();
			}, 40);
		}
	}
};

let horizontalWin = () => {
	// console.log("horizontalWin");
	if (board[0][0] == "X" && board[0][1] == "X" && board[0][2] == "X") {
		return true;
	}
	// console.log(board[0 && 0]);
	if (board[1][0] == "X" && board[1][1] == "X" && board[1][2] == "X") {
		return true;
	}
	if (board[2][0] == "X" && board[2][1] == "X" && board[2][2] == "X") {
		return true;
	}
	if (board[0][0] == "O" && board[1][0] == "O" && board[2][0] == "O") {
		return true;
	}
	if (board[1][0] == "O" && board[1][1] == "O" && board[1][2] == "O") {
		return true;
	}
	if (board[2][0] == "O" && board[2][1] == "O" && board[2][2] == "O") {
		return true;
	}
};

let verticalWin = () => {
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

let diagonalWin = () => {
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
	playerTurn = "O";
	// sanity check: this tells us the function is being called
	console.log("the board was cleared!");

	// collects all of the "td"s into an HTML Collection: https://www.w3schools.com/jsref/dom_obj_htmlcollection.asp
	const squares = document.getElementsByTagName("TD");

	// loops over the HTML Collections and clears out the Xs and Os.
	for (i = 0; i < squares.length; i++) {
		squares[i].innerHTML = null;
	}
};

// **BONUSES**

// 1. Display the current player's turn
// 2. Count number of wins for each player and display them
// 3. Reset the number of wins
// 4. Clear the board on alert window dismissal
// 5. Add players names and display who wins, i.e. "Congrats Emily, you won with 0s!"

///
