class Shoot {
  constructor(gameScreen, player) {
    this.gameScreen = gameScreen;
    this.width = 70;
    this.height = 70;

    this.left = 50;
    this.top = player + 50;
    

    this.element = document.createElement("img");
    this.element.src = "./Images/Deadpool_sword.png";
    this.element.style.transform = "rotate(-45deg)";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left += 2;

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
  }
}
