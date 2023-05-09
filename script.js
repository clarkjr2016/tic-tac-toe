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
  return { player, marker, isActive: false };
};

// player factory function

const GameFlow = (function () {
  const playerOne = Player("Player 1", "O");
  const playerTwo = Player("Player 2", "X"); // creating the players in the game

  playerOne.isActive = true; //setting playerOne's active status to true so that it can be the default player at the begginning of the game

  let playerArray = [playerOne, playerTwo]; // placing the two players into an array to cycle between in a below function

  console.log(playerArray);
  console.log(gameBoard.gameBoardDisplay);

  gameBoard.gameBoardDisplay.forEach((cell) => {
    cell.addEventListener("click", (e) => {
      playerArray.forEach((player) => {
        if (player.isActive === true) {
          e.target.innerText = player.marker; // setting the cell to the player with the active status
          player.isActive = false; // setting the player's marker that was originally true to false
        } else {
          player.isActive = true; // setting the other player's status to true so that it would be selected on the next click
        }
      });
    }); // event listener to add marker to cells;
  });

  const x_button = document.querySelector("X");

  const o_button = document.querySelector("O");
})();
// Module design for controlling how the gameboard display looks and how it will be returned
