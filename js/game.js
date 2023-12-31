class Game {
  constructor() {
    this.startScreen = document.getElementById("startScreen");
    this.gameContainer = document.getElementById("gameContainer");
    this.gameEndScreen = document.getElementById("GameEndScreen");

    this.width = 100;
    this.height = 100;

    this.swords = [];
    this.cows = [];

    this.mySound;
    this.player = null;
    this.isGameOver = false;

    this.score = 0;
    this.scoreElement = document.getElementById("scoreId");

    this.lives = 3;
    this.livesElement = document.getElementById("livesId");

    this.animateId;

    this.introSound = new Audio();
    this.introSound.src = "./audio/marvel-opening-theme.mp3";

    this.sound = new Audio();
    this.sound.src = "./audio/DMX sound.mp3";

    this.gameSound = new Audio();
    this.gameSound.src = "./audio/hit23.mp3.mp3";
  }

  start() {
    this.gameContainer.style.width = `${this.width}vw`;
    this.gameContainer.style.height = `${this.height}vh`;

    this.startScreen.style.display = "none";
    this.gameContainer.style.display = "block";

    this.player = new Player(this.gameContainer);
    this.gameLoop();
  }

  gameLoop() {
    this.update();

    if (Math.random() > 0.9 && this.cows.length < 1) {
      this.cows.push(new Obstacles(this.gameContainer));
    }
    if (this.animateId % 200 === 0) {
      this.cows.push(new Obstacles(this.gameContainer));
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
        this.livesElement.textContent = `lives: ${this.lives}`;
      } else if (obstacle.left < 0) {
        obstacle.element.remove();
      } else {
        obstaclesToKeep.push(obstacle);
      }
      this.swords.forEach((sword) => {
        sword.move();
        if (obstacle.hitBySword(sword)) {
          sword.element.remove();
          obstacle.element.remove();
          this.gameSound.play();
          this.introSound.play();
          this.score += 1;
          this.scoreElement.textContent = `score: ${this.score}`;
        } else if (sword.left > this.gameContainer.offsetWidth) {
          sword.element.remove();
        } else {
          swordsToKeep.push(sword);
        }
      });
    });

    this.cows = obstaclesToKeep;

    if (this.lives <= 0 || this.score == 20) {
      this.isGameOver = true;
      this.sound.play();
      this.introSound.pause();
    }
  }

  endGame() {
    this.player.element.remove();
    this.cows.forEach((obstacle) => obstacle.element.remove());

    this.gameContainer.style.display = "none";

    this.gameEndScreen.style.display = "block";
  }
}
