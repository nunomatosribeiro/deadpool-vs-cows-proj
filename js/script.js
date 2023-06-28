window.addEventListener("load", () => {
  const startButton = document.getElementById("startButton");
  const restartButton = document.getElementById("reload-button");
  let game;

  function startGame() {
    game = new Game();
    game.start();

    document.addEventListener("keydown", (event) => {
      const key = event.key;
      const possibleKeyMoves = ["ArrowUp", "ArrowDown"];

      if (possibleKeyMoves.includes(key)) {
        switch (key) {
          case "ArrowUp":
            game.player.directionY = -1;
            break;
          case "ArrowDown":
            game.player.directionY = 1;
        }
      }
    });

    document.addEventListener("keydown", (event) => {
      const key = event.key;
      const shooting = [" "];
    
      if (shooting.includes(key)) {
            game.swords.push(new Shoot(game.gameScreen, game.player.top))
            
      }
    });

    document.addEventListener("keyup", (event) => {
      const key = event.key;
      const possibleKeyMoves = ["ArrowUp", "ArrowDown"];

      if (possibleKeyMoves.includes(key)) {
        switch (key) {
          case "ArrowUp":
          case "ArrowDown":
            game.player.directionY = 0;
            break;
        }
      }
    });
  }

  

  startButton.addEventListener("click", () => {
    startGame();
  });

  restartButton.addEventListener("click", () => {
    location.reload();
  });
});
