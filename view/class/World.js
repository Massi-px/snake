import Snake from "./Snake.js";
import Apple from "./Apple.js";

export default class World{
    #snake
    #apple
    #width
    #height
    #buffer
    #score

    constructor(p_width, p_height) {
        this.#snake = new Snake(5,8)
        this.#apple = new Apple(10,8)
        this.#width = p_width
        this.#height = p_height
        this.#buffer = []
        this.#score = 0

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


    sendDirection(direction){
        this.#buffer.push(direction);
    }


    randomApple(){
        do{
            this.#apple = new Apple(Math.floor(Math.random() * this.#width),Math.floor(Math.random() * this.#height))
        }while(this.#snake.touchParts(this.#apple))
    }

    step(){
        //this.randomApple()
        //let death = this.#apple.x < 0 || this.#apple.y < 0
        let death = false;
        if(this.#buffer.length > 0){
            this.#snake.direction=this.#buffer.shift()
        }
        else{
            this.#snake.direction = this.#buffer[0];
        }


            if(this.#snake.touchPoint(this.#apple)){
                this.#snake.move(true);
                this.#score ++;
                this.randomApple();
            }

            else if(this.#snake.touchParts(this.#snake.head)){
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

        let death = this.step()

        console.log(this.#apple.x, this.#apple.y)
        p_display.score= this.#score;
        p_display.drawCircle(this.#apple.x, this.#apple.y, "red")


        for (let i = 0; i < this.#snake.parts.length; i++) {
            let head = this.#snake.parts.length - 1;
            if (i === head) {
                p_display.drawRectangle(this.#snake.parts[head].x, this.#snake.parts[head].y, "violet")
            } else {
                p_display.drawRectangle(this.#snake.parts[i].x, this.#snake.parts[i].y, "blue")
            }
        }



        return death

    }
}