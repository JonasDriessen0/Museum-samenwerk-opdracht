import { overlaps } from "./collisionmath.js";

export class GameLogic
{
    constructor(game)
    {
        this.game = game
        this.score = 0;
        this.steakY = 0;
        this.steakX = Math.random() * 1000;
        this.time = 2000
        this.misses = 0;
    }

    mouseMoved(event)
    {
        this.game.player.x = event.offsetX;
        this.game.player.y = event.offsetY;
    }
    
    logic()
    {
        this.game.steak.x = this.steakX;
        this.game.steak.y = this.steakY;
        if (overlaps(this.game.player, this.game.steak) == true)
        {
            this.score += 1;
            console.log(this.score)
            this.steakX = Math.random() * 1000;
            this.steakY = 0;
        }
        if (overlaps(this.game.renderer.invis, this.game.steak) == true)
        {
            this.steakX = Math.random() * 1000;
            this.steakY = 0;
            this.misses += 1;
        }
    }

    steakfall()
    {
        this.steakY -= -15;
    }

}