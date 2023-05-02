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
  const makeMove = function (player, row, column) {
    const board = GameBoard.getBoard(); // getting the state of  the board in a variable so that I'm refrencing the original object and not just creating a copy
    // this is calling the the getBoard function prior to the knnowledge be executed on it

    if (board[row][column] === 0) {
      board[row][column] = player.marker;
      console.log(board); // if the spot that the player chooses to place its marker is empty update it to that players marker
      endOfRound();
    } else {
      console.log("This spot is already taken");
      console.log(board);
      // if it isn't just print a log saying that the spot is taken
    }
  };

  const endOfRound = function (board) {
    winningCombos();
  };

  const refresh = function (board) {
    let row = 3;
    let column = 3;
    for (let i = 0; i < row; i++) {
      board[i] = []; // this creates the rows
      for (let j = 0; j < column; j++) {
        board[i].push(0); //  this creates the columns
      }
    }

    return board;
  }; // this function is being created to reset the board back to 0;

  const winningCombos = function () {
    const regularBoard = GameBoard.getBoard();
    const regularBoardRows = [
      regularBoard[0],
      regularBoard[1],
      regularBoard[2],
    ];

    const combos = [
      [regularBoardRows[0][0], regularBoardRows[0][1], regularBoardRows[0][2]],
      [regularBoardRows[1][0], regularBoardRows[1][1], regularBoardRows[1][2]],
      [regularBoardRows[2][0], regularBoardRows[2][1], regularBoardRows[2][2]],
      /* --- this groups all the winning row combinations --- */
      [regularBoardRows[0][0], regularBoardRows[1][0], regularBoardRows[2][0]],
      [regularBoardRows[0][1], regularBoardRows[1][1], regularBoardRows[2][1]],
      [regularBoardRows[0][2], regularBoardRows[1][2], regularBoardRows[2][2]],
      /* --- this groups all of the winning column combinations --- */
      [regularBoardRows[0][0], regularBoardRows[1][1], regularBoardRows[2][2]],
      [regularBoardRows[0][2], regularBoardRows[1][1], regularBoardRows[2][0]],
    ];

    return combos;
  }; // setting up the winning combos to be reviewed whenever a move is completed.

  return { makeMove, refresh, endOfRound };
})();
