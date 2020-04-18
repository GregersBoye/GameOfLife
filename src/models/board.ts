import Tile from './tile';
export class Board{
    columns: Array<Array<Tile>>;
    rowCount : number;
    colCount : number;

    constructor(width: number, height: number) {
        this.columns = [];
        for(let i: number = 0; i<=height; i++){
            let newCol : Array<Tile> = [];
            for(let j: number = 0; j<=width; j++){
                newCol.push(new Tile());
            }
            this.columns.push(newCol);
        }


        // this.rows = _.fill(Array(height), _.fill(Array(width), new Tile(false)));
        this.rowCount = width;
        this.colCount = height;
    }

    toString(){
        return this.columns.map((columns : Tile[]) => {
            return columns.map((tile :Tile) => {
                return tile.toString();
            }).join(' ');
        }).join('\n');
    }

    traverse(callback : Function){
        this.columns.forEach((column, columnIndex) => {
            column.forEach((tile, rowIndex) => {
                callback(tile, rowIndex, columnIndex);
            });
        });
    }

    countNeighbours(row: number, column:number) : number{
        let count:number =0;
        const [startRow, endRow] = this._getBounds(row, this.rowCount);
        const [startColumn, endColumn] = this._getBounds(column, this.colCount);

        for(let currentColumn : number = startColumn; currentColumn<=endColumn; currentColumn++){
            for(let currentRow :number = startRow; currentRow <= endRow; currentRow++){
                if(currentRow == row && currentColumn == column){
                    continue;
                }

                if(this.getTile(currentRow, currentColumn).isAlive){
                    count++;
                }
            }
        }

        return count;
    }

    _getBounds(counter : number, maxLimit: number) : Array<number>{
        const start : number = Math.max(0, counter-1);
        const end : number = Math.min(counter+1, maxLimit);

        return [start, end];
    }

    getTile(row: number, column: number) : Tile {
        return this.columns[column][row];
    }

    runGeneration(){

        this.traverse((tile: Tile, row: number, column:number) => {
            tile.neighbours = this.countNeighbours(row, column);
            tile.setNextState();
        });
        this.traverse((tile: Tile) => {tile.updateToNextGeneration();});
        console.log(this.toString());
    }
}
