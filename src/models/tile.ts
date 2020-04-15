export default class Tile{
    neighbours: number;
    isAlive: boolean;

    constructor(initialState: boolean) {
        this.neighbours = 0;
        this.isAlive = initialState;
    }

    get isAliveNextGeneration(){
        if(this.neighbours == 3){
            return true;
        }

        if(this.isAlive && this.neighbours == 2){
            return true;
        }

        return false;
    }

    toString(){
        return this.isAlive ? "*" : "O";
    }
}

