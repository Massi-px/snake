import SnakePart from './SnakePart.js'
import Direction from "../enum/Direction.js";
export default class Snake {
    #parts
    #direction
    constructor(p_x, p_y) {
        this.#parts = [];
        this.#direction = Direction.RIGHT;
        this.#parts.push(new SnakePart(p_x,p_y));
        this.#parts.pushHead()
    }

    dropTail() {
        return this.#parts.pop();
    }

    get Head() {
        return this.#parts[this.#parts.length-1];
    }

    get Parts() {
        return this.#parts;
    }

    get Direction() {
        return this.#direction;
    }

    pushHead(){
        let head = this.Head();
       if(this.#direction === Direction.RIGHT){
           this.#parts.push(new SnakePart(head.x+1,head.y));
       }
       else if(this.#direction === Direction.LEFT){
           this.#parts.push(new SnakePart(head.x-1,head.y));
       }
       else if(this.#direction === Direction.UP){
           this.#parts.push(new SnakePart(head.x,head.y-1));
       }
       else if(this.#direction === Direction.DOWN){
           this.#parts.push(new SnakePart(head.x,head.y+1));
       }
    }

    move(p_eat){
        if(p_eat === true){
            this.pushHead();
        }
        else if(p_eat === false){
            this.pushHead();
            this.dropTail();
        }
    }

    set direction(p_direction){
        if(this.#direction.includes(p_direction) === true){
            if(this.#direction %2 !== p_direction %2){
                this.#direction = p_direction;
            }
        }
        else{
            console.log("Invalid direction");
        }
    }

    TouchPoint(){

    }
}