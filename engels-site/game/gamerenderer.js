import { Rect } from "./rect.js";

export class GameRenderer
{
    constructor(game)
    {
        this.game = game;
        this.canvas = document.getElementById("canvas");
        this.g = canvas.getContext("2d");
        this.images = [];

        this.playerIdle = new Rect(0, 0, 100, 100);

        this.SteakIdle = new Rect(0, 0, 100, 100);
        this.invis = new Rect(1, 595, 1000, 10)
    }

    loadImages()
    {
        let sources = ["background.webp", "bucket.webp", "steak.webp"];
        let scope = this;

        let loaded = 0;
        for (let i = 0; i < sources.length; i++)
        {
            let img = new Image();

            
            img.onload = function ()
            {
                loaded++;
                if (loaded == sources.length)
                {
                    scope.game.startGame();
                }
            };
            img.src = sources[i];
            this.images.push(img);
        }
    }

    renderSprite(img, pos)
    {
        this.g.drawImage(img,
            pos.x, pos.y, 60, 60)
    }

    renderSteak(img)
    {
        this.g.drawImage(img, this.game.logic.steakX, this.game.logic.steakY, 60, 60)
    }

    renderBackground()
    {
        let background = document.getElementById("background")
        this.g.drawImage(background, 0, 0);
    }


    render()
    {
        let g = this.g;

        g.fillStyle = "#2e6ede";
        g.fillRect(0, 0, this.canvas.clientWidth, this.canvas.clientHeight);
        

        this.renderBackground();
        this.g.font = "50px serif";
        this.g.fillText("Score:", 800, 570)
        this.g.fillText(this.game.logic.score, 940, 570)
        this.g.fillText("Misses:", 10, 570)
        this.g.fillText(this.game.logic.misses, 170, 570)
        this.renderSprite(this.images[1], this.game.player, this.playerIdle);
        this.renderSteak(this.images[2], this.game.steak, this.steakdle);
    }    
}