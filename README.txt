Deadpool vs
Play the Game!
Game Logo

Description
Deadpool vs Cows is a game where the iconic Deadpool tries to kill all the cows he sees because of his phobia.
The game ends when he reaches the number 20 in kills or when 3 cows hit him.


Main Functionalities
Cows move automatically and the player changes direction by clicking up and down.
To shoot press the key <space> on keyboard.
Everytime a cow touches deadpool the player will lose one life of a total of 3.
The cows will appear from the front (right-side) of the screen.
After 5 killings the speed will increase, after 10 again and maintains that speed till the end.
The game ends after the player looses all the lives.
If player scores 20 kills, the final boss appears.

MVP
The minimum features include:
Being able to access the Start Screen;
Access the Game Screen;
Being able to shoot;
The cows appearing from the right side of the screen;
Decrement the lives when hit
Showing the Game Over Screen with restart button;



Backlog Functionalities
Adding a final boss when the score is reached;
Improving the UI;
Adding the sounds;
Counting the score;
Increment when hit by a extra live;

Technologies Used
HTML
CSS
JavaScript
DOM Manipulation
JS Classes
Local Storage
JS Audio() and JS Image()

States
Start Screen
Game Screen
End Game Screen

Project Structure

game.js
this.startScreen 
this.gameScreen 
this.gameEndScreen 
this.width
this.height 
this.swords 
this.cows 
this.mySound
this.player 
this.isGameOver 
this.score
this.lives
this.animateId;
this.introSound
this.introSound.src
this.sound
this.sound.src
this.gameSound
this.gameSound.src

start()
gameLoop()
update()
endGame()

shoot.js
this.gameScreen
this.width
this.height

this.left
this.top
this.element 
this.element.src
this.element.style.transform 
this.element.style.position
this.element.style.width
this.element.style.height
this.element.style.top 
this.element.style.left
this.gameScreen.appendChild(this.element);
move()
updatePosition()

player.js
this.gameScreen
this.directionY
this.left
this.top 
this.width
this.height 
this.element 
this.element.src 
this.element.style.position 
this.element.style.width 
this.element.style.height 
this.element.style.top
this.element.style.left
this.gameScreen.appendChild(this.element)

move()
updatePosition()
hitByCow(obstacle)

cows.js
this.gameScreen 
this.left
this.top
this.width 
this.height 
this.element;
this.element 
this.element.src 
this.element.style.position 
this.element.style.width
this.element.style.height 
this.element.style.top 
this.element.style.left
this.gameScreen.appendChild(this.element);

move()
updatePosition()
hitBySword(sword)

script.js
window.addEventListener
startGame()
startButton.addEventListener
restartButton.addEventListener

Links
Trello:
https://trello.com/invite/b/4taK2wpe/ATTI0e15b75ce0ed44d27bbdaf00b534e1d25CAD1179/project-game-deadpool

Slides:

Deploy: