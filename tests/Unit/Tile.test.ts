import {expect} from 'chai';
import Tile from './../../src/models/tile';


describe('tile', () => {
    describe('constructor', () => {
        it('should set default-values upon initialization', () => {
            const tile : Tile= new Tile();

            expect(tile.neighbours).to.equal(0);

        });
        it('should set initialstate', () => {
            const tile : Tile= new Tile(false);
            expect(tile.isAlive).to.be.false;
            expect(tile.getNextState()).to.be.false
        })
    });

    describe('getNextState', () => {
        it('should return nextState', () => {
            const tile : Tile= new Tile(false);

            tile.neighbours = 3;
            tile.setNextState();
            expect(tile.getNextState()).to.be.true;
        });
    })

    describe('_calculateNextState()', ()  => {
        it('should always return true if alive neighbours are 3', () => {
            const tileAlive : Tile= new Tile(true);
            const tileDead : Tile= new Tile(false);

            tileAlive.neighbours = 3;
            tileDead.neighbours = 3;

            expect(tileAlive._calculateNextState()).to.be.true;
            expect(tileDead._calculateNextState()).to.be.true;
        });
        it('should return true if alive and have 2 neighbours', () => {
            const tile : Tile= new Tile(true);
            tile.neighbours = 2;

            expect(tile._calculateNextState()).to.be.true;
        });
        it('should return false if alive and less than 2 neighbous', () => {
            const tile : Tile= new Tile(true);
            tile.neighbours = 1;

            expect(tile._calculateNextState()).to.be.false;
        });
        it('should return false if alive and more than 3 neighbours', () => {
            const tile : Tile= new Tile(true);
            tile.neighbours = 4;

            expect(tile._calculateNextState()).to.be.false;
        });
        it('should return false if dead and more than 3 neighbours', () => {
            const tile : Tile = new Tile(false);
            tile.neighbours = 4;

            expect(tile._calculateNextState()).to.be.false;
        })
        it('should return false if dead and less than 3 neighbours', () => {
            const tile : Tile = new Tile(false);
            tile.neighbours = 2;

            expect(tile._calculateNextState()).to.be.false;
        })
    });

    describe('getNextState()', () => {
        it('should return Tile._NextState')
    });

    describe('toString()', () => {
        it('should return "*" if alive', () => {
            const tile: Tile = new Tile(true);
            expect(tile.toString()).to.equal('*');
        })
        it('should return "O" if dead', () => {
            const tile : Tile = new Tile(false);
            expect(tile.toString()).to.equal('O');
        })
    })
});
