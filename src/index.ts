import * as PIXI from 'pixi.js';

const padding : number= 3;
const count: number = 50;
// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application({'backgroundColor': 0xffffff, 'width': (12 + padding) * count + padding, 'height': (10 + padding) * count + padding });

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
PIXI.Loader.shared.add("./resources/graphics/sprites.json").load(setup);

function setup() {
    // set speed, start playback and add it to the stage
    let sheet = PIXI.Loader.shared.resources["./resources/graphics/sprites.json"].spritesheet;

    if (sheet === undefined) {
        return;
    }


    for (let y: number = 0; y < count; y++) {
        for (let x: number = 0; x < count; x++) {
            let blop = new PIXI.AnimatedSprite(sheet.animations["idle"]);
            newSprite(blop, x, y);

        }
    }
}

function newSprite(sprite: any, xPos: number, yPos: number) {
    sprite.animationSpeed = 0.2;

    sprite.x = xPos * (12+padding)+padding;
    sprite.y = yPos * (10+padding)+padding;
    sprite.play();
    app.stage.addChild(sprite);
}
