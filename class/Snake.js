import SnakePart from './SnakePart.js'
import direction from "../enum/Direction.js";
export default class Snake {
    #parts
    #direction
    constructor(p_x, p_y) {
        this.#parts = [];
        this.#direction = direction.RIGHT;
        this.#parts.push(new SnakePart(p_x,p_y));
        this.pushHead()
    }

    dropTail() {
        return this.#parts.shift();
    }

    get head() {
        return this.#parts[this.#parts.length-1];
    }

    get parts() {
        return this.#parts;
    }

    get direction() {
        return this.#direction;
    }

    get length() {
        return this.#parts.length;
    }

    pushHead(){
        /*
       if(this.#direction === Direction.RIGHT){
           this.#parts.push(new SnakePart(this.head.x+1,this.head.y));
       }
       else if(this.#direction === Direction.LEFT){
           this.#parts.push(new SnakePart(this.head.x-1,this.head.y));
       }
       else if(this.#direction === Direction.UP){
           this.#parts.push(new SnakePart(this.head.x,this.head.y-1));
       }
       else if(this.#direction === Direction.DOWN){
           this.#parts.push(new SnakePart(this.head.x,this.head.y+1));
       }*/

        let x = this.head.x + (this.#direction === direction.RIGHT) - (this.#direction === direction.LEFT)
        let y = this.head.y + (this.#direction === direction.DOWN) - (this.#direction === direction.UP)
        this.#parts.push(new SnakePart(x,y));

    }

    move(p_eat){
        if(p_eat){
            this.pushHead();
        }
        else{
            this.pushHead();
            this.dropTail();
        }
    }

    set direction(p_direction){
        if(direction.include(p_direction)){
            if(this.#direction %2 !== p_direction %2){
                this.#direction = p_direction;
            }
        }
        else{
            console.log("Invalid direction");
        }
    }

    touchPoint(p_point){
        return (this.head.x === p_point.x && this.head.y === p_point.y)
    }

    touchParts(){
        let touch = false
        let i = 0
        let part = this.#parts[i]
        while (!touch && i < this.#parts.length-1) {
            part = this.#parts[i]
            touch = this.touchPoint(part)
            i++
        }
        return touch
/*
        for(const part of p_parts){
            if(this.touchPoint(part)){
                return true;
            }
        }
        return false;*/
    }

    touchWall(p_width, p_height) {
        return (this.head.x === p_width || this.head.y === p_height || this.head.x === -1 || this.head.y === -1)

    }
}