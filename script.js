(function GameBoard() {
  // The Gameboard represents the state of the board
  const row = 3;
  const column = 3;
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i].push(0);
    }
  }

  const getBoard = () => board;

  return { getBoard };
})();

function Players() {
  const players = [
    {
      name: "Player One",
      marker: "X",
    },

    {
      name: "Player Two",
      marker: "O",
    },
  ];
  return { players };
}

(function displayController() {
  function playerMove() {
    console.log();
  }

  playerMove();
})();
