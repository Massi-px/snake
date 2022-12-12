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

    randomApple(){
        this.#apple = new Apple(Math.floor(Math.random() * this.#width-1),Math.floor(Math.random() * this.#height -1))
    }
}