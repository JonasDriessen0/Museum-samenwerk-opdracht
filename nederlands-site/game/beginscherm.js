import { hitbox } from "./hitbox.js";

class beginScherm {
    constructor() {
        this.c = document.getElementById("canvas");
        this.ctx = this.c.getContext("2d");
        this.start = new hitbox(400, 250, 200, 100);
    }
    

    renderBeginScherm() {
        let ctx = this.ctx

        let sources = ["background.webp"];
        let background = document.getElementById("background")
        ctx.drawImage(background, 0, 0);

        ctx.font = "50px calibri";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "white";
        ctx.strokeRect(400, 250, 200, 100)
        ctx.fillText("Catch the items!", 340, 200)
        ctx.fillText("start", 455, 310)
    }

    mouseClicked(event) {
        let x = event.offsetX;
        let y = event.offsetY;

        if (this.start.Contains(x, y)) {
            import("./game.js").then(() => {})
        }
    }

    click() {
        let scope = this
        this.c.addEventListener("click", function (event) { scope.mouseClicked(event); })
    }
}

let beginscherm = new beginScherm;
beginscherm.renderBeginScherm();
beginscherm.click();