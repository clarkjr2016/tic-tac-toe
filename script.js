const gameBoard = (function () {
  //Private variables
  let gameBoardDisplay = Array.from(
    document.querySelector(".gameboard").children // creating an array consisting of the DOM elements within the gameboard div
  );

  let gameBoardValues = {
    topRow: [
      gameBoardDisplay[0].innerText,
      gameBoardDisplay[1].innerText,
      gameBoardDisplay[2].innerText,
    ],
    middleRow: [
      gameBoardDisplay[3].innerText,
      gameBoardDisplay[4].innerText,
      gameBoardDisplay[5].innerText,
    ],
    bottomRow: [
      gameBoardDisplay[6].innerText,
      gameBoardDisplay[7].innerText,
      gameBoardDisplay[8].innerText,
    ],
    leftColumn: [
      gameBoardDisplay[0].innerText,
      gameBoardDisplay[3].innerText,
      gameBoardDisplay[6].innerText,
    ],
    middleColumn: [
      gameBoardDisplay[1].innerText,
      gameBoardDisplay[4].innerText,
      gameBoardDisplay[7].innerText,
    ],
    rightColumn: [
      gameBoardDisplay[2].innerText,
      gameBoardDisplay[5].innerText,
      gameBoardDisplay[8].innerText,
    ],
    diagonal1: [
      gameBoardDisplay[0].innerText,
      gameBoardDisplay[4].innerText,
      gameBoardDisplay[8].innerText,
    ],
    diagonal2: [
      gameBoardDisplay[2].innerText,
      gameBoardDisplay[4].innerText,
      gameBoardDisplay[6].innerText,
    ],
  };

  console.log(gameBoardValues);

  function getboard() {
    return gameBoardValues;
  }

  return { gameBoardDisplay, getboard, gameBoardValues };
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
  const roundSequence = function () {};

  gameBoard.gameBoardDisplay.forEach((cell) => {
    cell.addEventListener(
      "click",
      (e) => {
        playerArray.forEach((player) => {
          if (player.isActive === true && e.target.innerText === "") {
            e.target.innerText = player.marker; // setting the cell to the player with the active status
            player.isActive = false;
            console.log(player.marker);

            let gameBoardValues = {
              topRow: [
                gameBoard.gameBoardDisplay[0].innerText,
                gameBoard.gameBoardDisplay[1].innerText,
                gameBoard.gameBoardDisplay[2].innerText,
              ],
              middleRow: [
                gameBoard.gameBoardDisplay[3].innerText,
                gameBoard.gameBoardDisplay[4].innerText,
                gameBoard.gameBoardDisplay[5].innerText,
              ],
              bottomRow: [
                gameBoard.gameBoardDisplay[6].innerText,
                gameBoard.gameBoardDisplay[7].innerText,
                gameBoard.gameBoardDisplay[8].innerText,
              ],
              leftColumn: [
                gameBoard.gameBoardDisplay[0].innerText,
                gameBoard.gameBoardDisplay[3].innerText,
                gameBoard.gameBoardDisplay[6].innerText,
              ],
              middleColumn: [
                gameBoard.gameBoardDisplay[1].innerText,
                gameBoard.gameBoardDisplay[4].innerText,
                gameBoard.gameBoardDisplay[7].innerText,
              ],
              rightColumn: [
                gameBoard.gameBoardDisplay[2].innerText,
                gameBoard.gameBoardDisplay[5].innerText,
                gameBoard.gameBoardDisplay[8].innerText,
              ],
              leftDiagonal: [
                gameBoard.gameBoardDisplay[0].innerText,
                gameBoard.gameBoardDisplay[4].innerText,
                gameBoard.gameBoardDisplay[8].innerText,
              ],
              rightDiagonal: [
                gameBoard.gameBoardDisplay[2].innerText,
                gameBoard.gameBoardDisplay[4].innerText,
                gameBoard.gameBoardDisplay[6].innerText,
              ],
            };

            const winningCombinations = [
              player.marker,
              player.marker,
              player.marker,
            ];

            console.log(winningCombinations);

            for (const row in gameBoardValues) {
              if (gameBoardValues[row] === winningCombinations) {
                console.log(`${player.player} won`);
              }
            }
            console.log(gameBoardValues);
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
