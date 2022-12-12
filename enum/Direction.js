let direction;

export default direction = {
    UP: 0,
    DOWN: 1,
    LEFT: 2,
    RIGHT: 3,

    includes(p_val){
        if(p_val === direction[p_val]){
            return true;
        }
        else if(p_val !== direction[p_val]){
            return false;
        }
    }
}