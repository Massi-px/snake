export default class Point {
    #x
    #y
    constructor(p_x, p_y) {
      this.#x = p_x
      this.#y = p_y
    }

    get x() {
      return this.#x
    }

    get y() {
        return this.#y
    }

    set x(p_x) {
      this.#x = p_x
    }

    set y(p_y) {
        this.#y = p_y
    }
}