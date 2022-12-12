export default class point {
    #x
    #y
    constructor(p_x, p_y) {
      this.#x = 0
      this.#y = 0
    }

    get x() {
      return this.#x
    }

    set x(p_x) {
      this.#x = p_x
    }

    get y() {
      return this.#y
    }

    set y(p_y) {
        this.#y = p_y
    }
}