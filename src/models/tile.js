"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Tile = /** @class */ (function () {
    function Tile(initialState) {
        this.neighbours = 0;
        this.isAlive = initialState;
    }
    Object.defineProperty(Tile.prototype, "isAliveNextGeneration", {
        get: function () {
            if (this.neighbours == 3) {
                return true;
            }
            if (this.isAlive && this.neighbours == 2) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    Tile.prototype.toString = function () {
        return this.isAlive ? "*" : "O";
    };
    return Tile;
}());
exports.default = Tile;
