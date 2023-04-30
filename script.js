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

    const endOfRound = function () {
      board;
      const markerCollectionArray = [];
      for (let i = 0; i < board[0].length; i++) {
        markerCollectionArray.push(board[0][i]);
      }
    };

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

  return { makeMove };
})();
