let direction;

export default direction = {
    UP: 0,
    LEFT: 1,
    DOWN: 2,
    RIGHT: 3,

    include(p_val){
        return (Object.values(direction).includes(p_val))
    }
}