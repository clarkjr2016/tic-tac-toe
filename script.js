const gameBoard = (function () {
  //Private variables
  let gameBoardDisplay = Array.from(
    document.querySelector(".gameboard").children // creating an array consisting of the DOM elements within the gameboard div
  );

  gameBoardDisplay.values;

  function getboard() {
    return gameBoardDisplay;
  }

  return { gameBoardDisplay, getboard };
})();

// module pattern for gameboard and gameboard display

const Player = function (player, marker) {
  return { player, marker, isActive: undefined };
};

// player factory function

const GameFlow = (function () {
  const playerOne = Player("Player 1", "O");
  const playerTwo = Player("Player 2", "X"); // creating the players in the game

  let playerArray = [playerOne, playerTwo]; // placing the two players into an array to cycle between in a below function

  playerOne.isActive = true;
  console.log(playerArray);
  console.log(gameBoard.gameBoardDisplay);

  gameBoard.gameBoardDisplay.forEach((cell) => {
    cell.addEventListener(
      "click",
      (e) => {
        playerArray.forEach((player) => {
          if (player.isActive === true && e.target.innerText === "") {
            e.target.innerText = player.marker; // setting the cell to the player with the active status
            player.isActive = false;
          } else {
            player.isActive = true;
          }
        });
      },
      { once: true } // added the "once" option to remove the original event listener so that the event listener wouldn't be triggered if a cell that already has a value was clicked again.
    ); // event listener to add marker to cells;
  }); // adds markers to the cell

  const x_button = document.querySelector("X");

  const o_button = document.querySelector("O");
})();
// Module design for controlling how the gameboard display looks and how it will be returned
