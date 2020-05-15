import {expect} from 'chai';
import Board from './../../src/models/board';
import Tile from "../../src/models/tile";

describe('Board', () => {
    describe('Constructor', () => {

        it('sets the board', () => {
            const board :Board = new Board(3,3);

            expect(board).to.be.instanceOf(Board);

            expect(board.rowCount).to.equal(3);
            expect(board.colCount).to.equal(3);

            expect(board.columns.length).to.equal(3);
            expect(board.columns[0].length).to.equal(3);
        });
    });

    describe('traverse', () => {
        it('runs through all fields', () => {
            const board : Board = new Board(3,3);
            let i : number = 0;

            board.traverse(() => {
                i++;
            });

            expect(i).to.equal(9);
        });
    });

    describe('countNeighbours', () => {
        it('can count the neighbours all around', () => {
            const board : Board = new Board(3,3);
            board.traverse((tile : Tile) => {
                tile.isAlive = true;
            });

            expect(board.countNeighbours(1,1)).to.equal(8);

        });

        it('can count neighbours on the edge', () => {
            const board : Board = new Board(3,3);
            board.traverse((tile : Tile) => {
                tile.isAlive = true;
            });

            expect(board.countNeighbours(0,1)).to.equal(5);
        })

        it('can count neighbours on an upper-left corner', () => {
            const board : Board = new Board(3,3);
            board.traverse((tile : Tile) => {
                tile.isAlive = true;
            });

            expect(board.countNeighbours(0,0)).to.equal(3);
        });

        it('can count neighbours on an upper-right corner', () => {
            const board : Board = new Board(3,3);
            board.traverse((tile : Tile) => {
                tile.isAlive = true;
            });

            expect(board.countNeighbours(2,0)).to.equal(3);
        });


    });

    describe('getTile', () => {
        it('returns the required tile', () => {

        })
    });

    describe('_getBounds', () => {
        it('can return the correct bounds in the middle', () => {
            const board : Board = new Board(3,3);

            const result = board._getBounds(1, board.rowCount);
            expect(result).to.eql([0,2]);
        });

        it('can return the correct bound at the upper limit', () => {
            const board : Board = new Board(3,3);

            const result = board._getBounds(2, board.rowCount);
            expect(result).to.eql([1,2]);
        });

        it('can return the correct bound at the lower limit', () => {
            const board : Board = new Board(3,3);

            const result = board._getBounds(0, board.rowCount);
            expect(result).to.eql([0,1]);
        });
    });

});
