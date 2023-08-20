class Obstacles {
  constructor(gameContainer) {
    this.gameContainer = gameContainer;
    this.left = 1500;
    this.top = Math.floor(Math.random() * 500 + 30);
    this.width = 80;
    this.height = 80;
    this.element;

    this.element = document.createElement("img");
    this.element.src = "./Images/deadpool_cow.webp";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.gameContainer.appendChild(this.element);
  }

  move() {
    this.left -= 2;

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
  }

  hitBySword(sword) {
    const swordsRect = sword.element.getBoundingClientRect();
    const obstacleRect = this.element.getBoundingClientRect();

    if (
      swordsRect.top < obstacleRect.bottom &&
      swordsRect.bottom > obstacleRect.top &&
      swordsRect.right > obstacleRect.left &&
      swordsRect.left < obstacleRect.right
    ) {
      return true;
    } else {
      return false;
    }
  }
}
