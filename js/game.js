//game.js - This is the file where we will define the Game class
//to represent the game's data (properties) and behaviors (methods).

class Game{
    constructor(){
        this.startScreen = getElementById('startScreen');
        this.gameScreen = getElementById('gameContainer');
        this.gameEndScreen = getElementById('gameEndScreen');

        this.cows = [];
        this.sword
        this.player = new this.player(this.gameScreen);
        this.isGameOver = false;
        this.score = 0;
        this.live = 3;
        this.animated;
    }

start(){

    this.startScreen.style.display = 'block'
    this.gameScreen.style.display = 'none'

}

gameLoop(){

    this.update();
}

update(){

}






}