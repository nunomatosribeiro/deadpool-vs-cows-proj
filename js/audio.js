class Audio {
  constructor() {
    this.element = createElement("audio");
    this.element.src = "./audio/DMX sound.mp3";
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    this.element = false;

    document.body.appendChild(this.sound);
  }

  play() {
    document.addEventListener("load", () => {
      if (isGameOver) {
        this.element = true;
      }
    });
  }
}
