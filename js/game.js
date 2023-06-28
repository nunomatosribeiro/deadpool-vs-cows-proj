class Game {
  constructor() {
    this.startScreen = document.getElementById("startScreen");
    this.gameScreen = document.getElementById("gameScreen");
    this.gameEndScreen = document.getElementById("GameEndScreen");

    this.width = 100;
    this.height = 100;

    this.swords = [];
    this.cows = [];

    this.player = null;
    this.isGameOver = false;
    this.score = 0;
    this.lives = 3;
    this.animateId;
  }

  start() {
    this.gameScreen.style.width = `${this.width}vw`;
    this.gameScreen.style.height = `${this.height}vh`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.player = new Player(this.gameScreen);

    this.gameLoop();
  }

  gameLoop() {
    this.update();

    if (Math.random() > 0.8 && this.cows.length < 1) {
      this.cows.push(new Obstacles(this.gameScreen));
    }
    if (this.animateId % 300 === 0) {
      this.cows.push(new Obstacles(this.gameScreen));
    }
    if (this.isGameOver) {
      this.endGame();
    } else {
      this.animateId = requestAnimationFrame(() => this.gameLoop());
    }
  }

  update() {
    this.player.move();
    const swordsToKeep = [];
    const obstaclesToKeep = [];

    this.cows.forEach((obstacle) => {
      obstacle.move();
      if (this.player.hitByCow(obstacle)) {
        obstacle.element.remove();
        this.lives -= 1;
      } else if (obstacle.left < 0) {
        obstacle.element.remove()
        this.score += 1;
      } else {
        obstaclesToKeep.push(obstacle);
      }
      this.swords.forEach((sword) => {
        sword.move();
        if (obstacle.hitBySword(sword)) {
          sword.element.remove();
          obstacle.element.remove();
          this.score += 1;
        } else if (sword.left > this.gameScreen.offsetWidth) {
          sword.element.remove();
        } else {
          swordsToKeep.push(sword);
        }
      });
    });

    this.cows = obstaclesToKeep;
    this.swords = swordsToKeep;

    if (this.lives <= 0 || this.score === 20) {
      this.isGameOver = true;
    }
  }

  endGame() {
    this.player.element.remove();
    this.cows.forEach((obstacle) => obstacle.element.remove());

    // Hide game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
  }
}
