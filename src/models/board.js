"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _ = __importStar(require("lodash"));
var tile_1 = __importDefault(require("./tile"));
var Board = /** @class */ (function () {
    function Board(width, height) {
        this.rows = _.fill(Array(height), _.fill(Array(width), new tile_1.default(false)));
    }
    Board.prototype.toString = function () {
        return this.rows.map(function (columns) {
            return columns.map(function (tile) {
                return tile.toString();
            }).join(' ');
        }).join('\n');
    };
    return Board;
}());
exports.Board = Board;
