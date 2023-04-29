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
    console.log("Current board state: ", GameBoard.getBoard());
    board[row][column] = player.marker; // in the position that is given give the value of the players marker
    console.log("Changed board state: ", GameBoard.getBoard());
  };

  makeMove(playerOne, 0, 0);
  makeMove(playerTwo, 0, 1);
})();
