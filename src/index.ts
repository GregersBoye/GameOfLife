import * as PIXI from 'pixi.js';
import Board from './models/board';
import Tile from './models/tile';

const padding: number = 3;
const count: number = 50;
// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application({
    'backgroundColor': 0xffffff,
    'width': (12 + padding) * count + padding,
    'height': (10 + padding) * count + padding
});

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
PIXI.Loader.shared.add("./resources/graphics/sprites.json").load(setup);

function random(low: number, high: number) {
    return Math.random() * (high - low) + low
}
let board : Board;
let sheet : any;
function setup() {
    board = new Board(count, count)
    // set speed, start playback and add it to the stage
    sheet = PIXI.Loader.shared.resources["./resources/graphics/sprites.json"].spritesheet;

    board.traverse((tile: Tile, row: number, column: number) => {
        if (sheet === undefined) {
            return;
        }

        let sprite = new PIXI.AnimatedSprite(sheet.animations["idle"]);
        tile.sprite = sprite;
        tile.sprite.visible = tile.isAlive
        newSprite(sprite, row, column);
    })

}

function switchGeneration(){
console.log("switching generation");
    board.runGeneration(true);

    board.traverse((tile: Tile, row: number, col: number) => {
        //no change, do nothing more


        if (sheet == undefined) {
            return;
        }

        // try{
        //Tile spawns new life
        if (tile.isAlive) {
            tile.sprite.visible = true;
            //     tile.sprite.texture = sheet.animations["idle"];
            //     tile.sprite.loop = true;
        }
        //
        //Tile dies
        if (!tile.isAlive) {
            // tile.sprite.loop = false;
            // tile.sprite.texture = sheet.animations["death"];
            // tile.sprite.onComplete(() => {
            tile.sprite.visible = false
            // });
        }
        //
        //     }catch (e) {
        //         var state = tile.isAlive ? 'alive' : 'dead';
        //         // console.log(`we died on sprite [${row};${col}] (${state}), because ${e.message}`);
        //     }

        // tile.updateToNextGeneration();
    });
}
let generationBtn = document.getElementById('generationBtn');

if(generationBtn) {
    generationBtn.addEventListener('click', () => {window.setInterval(switchGeneration, 100);});
}


function newSprite(sprite: any, xPos: number, yPos: number) {
    sprite.animationSpeed = 0.2;
    const startFrame: number = random(0, 10);
    sprite.x = xPos * (12 + padding) + padding;
    sprite.y = yPos * (10 + padding) + padding;
    sprite.gotoAndPlay(startFrame);
    app.stage.addChild(sprite);
}
