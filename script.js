const gameBoard = (function () {
  //Private variables
  let gameBoardDisplay = Array.from(
    document.querySelector(".gameboard").children
  );

  gameBoardDisplay.values;

  function getboard() {
    return gameBoardDisplay;
  }

  return { gameBoardDisplay, getboard };
})();

// module pattern for gameboard and gameboard display

const Player = function (player, marker) {
  return { player, marker, isActive: false };
};

// player factory function

const GameFlow = (function () {
  const playerOne = Player("Player 1", "O");
  const playerTwo = Player("Player 2", "X");

  playerOne.isActive = true;

  let playerArray = [playerOne, playerTwo];

  console.log(playerArray);

  gameBoard.gameBoardDisplay.forEach((cell) => {
    cell.removeEventListener;
  });

  const x_button = document.querySelector("X");

  const o_button = document.querySelector("O");
})();
// Module design for controlling how the gameboard display looks and how it will be returned
