const gameBoard = (function () {
  //Private variables
  let gameBoardDisplay = ["x", "x", "x", "o", "o", "o", "x", "x", "x"];

  return { gameBoardDisplay };
})();

// module pattern for gameboard and gameboard display

let player = function (marker) {
  const isSelected = false;

  return { marker, isSelected };
};

// player factory function

const displayController = (function () {
  const top_left = document.querySelector(".game-squares.top-left");
  top_left.innerText = gameBoard.gameBoardDisplay[0];

  const top_middle = document.querySelector(".game-squares.top-middle");
  top_middle.innerText = gameBoard.gameBoardDisplay[1];

  const top_right = document.querySelector(".game-squares.top-right");
  top_right.innerText = gameBoard.gameBoardDisplay[2];

  const middle_left = document.querySelector(".game-squares.middle-left");
  middle_left.innerText = gameBoard.gameBoardDisplay[3];

  const middle_middle = document.querySelector(".game-squares.middle-middle");
  middle_middle.innerText = gameBoard.gameBoardDisplay[4];

  const middle_right = document.querySelector(".game-squares.middle-right");
  middle_right.innerText = gameBoard.gameBoardDisplay[5];

  const bottom_left = document.querySelector(".game-squares.bottom-left");
  bottom_left.innerText = gameBoard.gameBoardDisplay[6];

  const bottom_middle = document.querySelector(".game-squares.bottom-middle");
  bottom_middle.innerText = gameBoard.gameBoardDisplay[7];

  const bottom_right = document.querySelector(".game-squares.bottom-right");
  bottom_right.innerText = gameBoard.gameBoardDisplay[8];

  const x_button = document.querySelector("X");

  const o_button = document.querySelector("O");
})();
// Module design for controlling how the gameboard display looks and how it will be returned
