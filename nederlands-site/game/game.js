import { GameLogic } from "./gamelogic.js";
import { GameRenderer } from "./gamerenderer.js";
import { Rect } from "./rect.js";

class Game
{
    constructor()
    {
        this.logic = new GameLogic(this);
        this.renderer = new GameRenderer(this);
        this.player = new Rect(0, 0, 24, 24);
        this.steak = new Rect(100, 100, 24, 24);
    }

    init()
    {
        this.renderer.loadImages();
    }
    startGame()
    {
        let scope = this;
        this.renderer.canvas.addEventListener("mousemove", function(event) {scope.logic.mouseMoved(event); });

        setInterval(function () { scope.doGameFrame() },33);
    }

    doGameFrame()
    {
        this.logic.steakfall();
        this.logic.logic();
        this.renderer.render();
    }
}

let game = new Game()
game.init();
//game.render();