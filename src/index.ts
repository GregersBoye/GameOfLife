import {Board} from './models/board';
import Tile from "./models/tile";

const board = new Board(10,10);
let i: number = 0;
board.runGeneration();
console.log(++i);
board.runGeneration();
console.log(++i);
board.runGeneration();
console.log(++i);
board.runGeneration();
console.log(++i);
