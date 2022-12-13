import Snake from "./Snake.js";
import Apple from "./Apple.js";

export default class World{
    #snake
    #apple
    #width
    #height

    constructor(p_width, p_height) {
        this.#snake = new Snake(5,8)
        this.#apple = new Apple(10,8)
        this.#width = p_width
        this.#height = p_height
    }

    get width(){
        return this.#width
    }

    get height(){
        return this.#height
    }

    get snake(){
        return this.#snake
    }

    get apple(){
        return this.#apple
    }


    randomApple(p_display){
        do{
            this.#apple = new Apple(Math.floor(Math.random() * this.#width-1),Math.floor(Math.random() * this.#height -1))
        }while(this.#snake.touchPoint(this.#apple))
        p_display.drawCircle(this.#apple.x, this.#apple.y, "red")
    }

    step(p_display){
        let death = false

        p_display.drawCircle(this.#apple.x, this.#apple.y, "red")

            for (let i = 0; i < this.#snake.parts.length; i++) {
                if (i === this.#snake.parts.length - 1) {
                    p_display.drawRectangle(this.#snake.parts[this.#snake.parts.length - 1].x, this.#snake.parts[this.#snake.parts.length - 1].y, "green")
                } else {
                    p_display.drawRectangle(this.#snake.parts[i].x, this.#snake.parts[i].y, "blue")
                }
            }

            if(this.#snake.touchPoint(this.#apple)){
                this.#snake.move(true);
                this.randomApple(p_display);
            }

            else if(this.#snake.touchParts()){
                alert('Game Over')
                death = true
            }

            else if(this.#snake.touchWall(this.#width,this.#height)){
                alert('Game Over')
                death = true
            }
            else if(this.#snake.length === this.#width * this.#height){
                alert('You Win')
                death = true
            }
            else{
                this.#snake.move(false);
            }
            return death
        }

    play(p_display){

        return this.step(p_display)

    }
}