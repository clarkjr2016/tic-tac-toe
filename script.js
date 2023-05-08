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
  return { player, marker };
};

// player factory function

const GameFlow = (function () {
  console.log(gameBoard.gameBoardDisplay);

  gameBoard.gameBoardDisplay.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      e.target.innerHTML = "Hello";
    });
    cell.removeEventListener;
  });

  const x_button = document.querySelector("X");

  const o_button = document.querySelector("O");
})();
// Module design for controlling how the gameboard display looks and how it will be returned
