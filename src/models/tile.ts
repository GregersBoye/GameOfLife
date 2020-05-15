import * as _ from 'lodash';

export default class Tile {
    neighbours: number;
    isAlive: boolean;
    _nextState: boolean;
    sprite : any;

    constructor(initialState = _.random(0, 100) > 60) {
        this.neighbours = 0;
        this.isAlive = initialState;
        this._nextState = initialState;
    }

    _calculateNextState() {
        if (this.neighbours == 3) {
            return true;
        }

        // noinspection RedundantIfStatementJS
        if (this.isAlive && this.neighbours == 2) {
            return true;
        }

        return false;
    }

    getNextState(){
        return this._nextState;
    }

    setNextState(){
        this._nextState = this._calculateNextState();
    }

    updateToNextGeneration(){
        this.isAlive = this._nextState;
    }

    toString() {
        return this.isAlive ? '*' : 'O';
    }
}

