import * as _ from 'lodash';
import Tile from './tile';
export class Board{
    rows: Array<Array<Tile>>;

    constructor(width: number, height: number) {
        this.rows = _.fill(Array(height), _.fill(Array(width), new Tile(false)));
    }

    toString(){
        return this.rows.map((columns : Tile[]) => {
            return columns.map((tile :Tile) => {
                return tile.toString();
            }).join(' ');
        }).join('\n');
    }
}
