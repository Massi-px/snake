import Display from './class/Display.js';
import World from './class/World.js'
import direction from './enum/Direction.js'

let world = new World(50,30);
let display = new Display(world.width,world.height)
display.speed =30;
document.addEventListener("keydown",keyboard);
function keyboard(evt){
    switch(evt.keyCode) {
        case 37:
            world.sendDirection(direction.LEFT)
            //world.snake.direction = direction.LEFT
            break;
        case 38:
            world.sendDirection(direction.UP)
            //world.snake.direction = direction.UP
            break;
        case 39:
            world.sendDirection(direction.RIGHT)
            //world.snake.direction = direction.RIGHT
            break;
        case 40:
            world.sendDirection(direction.DOWN)
            //world.snake.direction = direction.DOWN
            break;
    }
}
    display.play(world);
