import Display from './class/Display.js';
import World from './class/World.js'
import direction from './enum/Direction.js'

let world = new World(70,50);
let display = new Display(world.width,world.height)
display.speed =60;
document.addEventListener("keydown",keyboard);
function keyboard(evt){
    switch(evt.keyCode) {
        case 37:
            world.snake.direction = direction.LEFT
            break;
        case 38:
            world.snake.direction = direction.UP
            break;
        case 39:
            world.snake.direction = direction.RIGHT
            break;
        case 40:
            world.snake.direction = direction.DOWN
            break;
    }
}
    display.play(world);
