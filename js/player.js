class Player {
    constructor(gameScreen){
this.gameScreen = gameScreen;
this.directionY = 0;
this.left = 50
this.top = 10

this.width = 70
this.height = 130

this.element = document.createElement('img')


this.element.src = './Images/Deadpool_icon.game.png'
this.element.style.position = 'absolute'

this.element.style.width = `${this.width}px`;
this.element.style.height = `${this.height}px`;

this.element.style.top = `${this.top}px`
this.element.style.left = `${this.left}px`

this.gameScreen.appendChild(this.element);

}

move(){
this.top += this.directionY
if(this.top < 10){
    this.top = 10
}
if(this.top > this.gameScreen.offsetHeight - this.height - 10){
    this.top = this.gameScreen.offsetHeight -this.height - 10
}

this.updatePosition()

}

updatePosition(){
    
    this.element.style.top = `${this.top}px`
        
}

hitByCow(obstacle){
    const playerRect = this.element.getBoundingClientRect()
    const obstacleRect = obstacle.element.getBoundingClientRect()

    if(
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top &&
        playerRect.right > obstacleRect.left)
        {
            return true
        } else {
            return false
        }
}

}




