const GameBoard = (function () {
  // The Gameboard represents the state of the board
  const row = 3;
  const column = 3;
  let board = []; // this is the array to set up the 2d Array which will represent the gameboard

  for (let i = 0; i < row; i++) {
    board[i] = []; // this creates the rows
    for (let j = 0; j < column; j++) {
      board[i].push(0); //  this creates the columns
    }
  }

  const printBoard = function () {
    console.log(board); // this is just a function to print the state of the board in the console so that I can see what is happening
  };

  const getBoard = () => {
    return board;
  };

  printBoard();

  return { board, getBoard, printBoard };
})();

const Players = function (player, marker) {
  return {
    player,
    marker,
  };
}; // creating a factory function to create players with

const playerOne = Players("Player 1", "X"); // creating player one

const playerTwo = Players("Player 2", "O"); // creating player two

const GameFlow = (function () {
  const board = GameBoard.getBoard();
  board;
  const boardObject = {
    topRow: board[0],
    middleRow: board[1],
    bottomRow: board[2],
    left_column: [board[0][0], board[1][0], board[2][0]],
    middle_column: [board[0][1], board[1][1], board[2][1]],
    right_column: [board[0][2], board[1][2], board[2][2]],
    diagonal_left: [board[0][0], board[1][1], board[2][2]],
    diagonal_right: [board[0][2], board[1][1], board[2][0]],
  }; // creating an object versionof all the different combos to be used later

  const updateOthers = function () {
    const board = GameBoard.getBoard();
    boardObject.left_column = [board[0][0], board[1][0], board[2][0]];
    boardObject.middle_column = [board[0][1], board[1][1], board[2][1]];
    boardObject.right_column = [board[0][2], board[1][2], board[2][2]];
    (boardObject.diagonal_left = [board[0][0], board[1][1], board[2][2]]),
      (boardObject.diagonal_right = [board[0][2], board[1][1], board[2][0]]);
  }; // have to create this function to update these columns because in the original instance of the object we are just linked to the intial instnce of the board call\

  const refresh = function (board) {
    let row = 3;
    let column = 3;
    for (let i = 0; i < row; i++) {
      board[i] = []; // this creates the rows
      for (let j = 0; j < column; j++) {
        board[i].push(0); //  this creates the columns
      }
    }
    boardObject.topRow = board[0];
    boardObject.middleRow = board[1];
    boardObject.bottomRow = board[2];
    boardObject.left_column = [board[0][0], board[1][0], board[2][0]];
    boardObject.middle_column = [board[0][1], board[1][1], board[2][1]];
    boardObject.right_column = [board[0][2], board[1][2], board[2][2]];
    (boardObject.diagonal_left = [board[0][0], board[1][1], board[2][2]]),
      (boardObject.diagonal_right = [board[0][2], board[1][1], board[2][0]]);

    return board;
  }; // this function is being created to reset the board back to 0;

  const makeMove = function (player, row, column) {
    // getting the state of  the board in a variable so that I'm refrencing the original object and not just creating a copy
    // this is calling the the getBoard function prior to the knnowledge be executed on it
    board;
    const endOfRound = function () {
      board;
      const winningCombo = [player.marker, player.marker, player.marker];

      for (const key in boardObject) {
        if (JSON.stringify(boardObject[key]) === JSON.stringify(winningCombo)) {
          console.log(`${player.player} won!`);
        }
      }
    }; // loops through each row combination and checks to see if that specific player marker is present in all of the three entries

    if (board[row][column] === 0) {
      board[row][column] = player.marker;
      console.log(board); // if the spot that the player chooses to place its marker is empty update it to that players marker
      updateOthers();
      endOfRound(); // declares winner when a winning combination is met;
    } else {
      console.log("This spot is already taken");
      console.log(board);
      // if it isn't just print a log saying that the spot is taken
    }
    board;
  };

  // setting up the winning combos to be reviewed whenever a move is completed.

  return { makeMove, boardObject, refresh };
})();
