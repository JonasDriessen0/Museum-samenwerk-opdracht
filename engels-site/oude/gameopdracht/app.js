
class Game
{
    constructor()
    {
      this.canvas = document.getElementById("canvas");
      this.g = canvas.getContext("2d");
    }

    render()
    {
        let g = this.g
        g.fillStyle = "#2e6ede";
        g.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);


        g.fillStyle = "#000000";
        g.fillRect(0, 0, 10, 10);  
    }
}
let game = new Game();
game.render();
