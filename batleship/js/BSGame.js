/**
 * Created by rodrigocespedes on 12/1/2015.
 */

function BSGame()
{
    this.player = [];
    this.config = new ConfigurationGame();
}

BSGame.prototype.start = function()
{
    this.config.setConfiguration();
    this.config.qtyShips();
    var playerName = prompt("Name Of Player 1");
    this.player[0] = new Player(playerName, this.config);
    playerName = prompt("Name Of Player 2");
    this.player[1] = new Player(playerName, this.config);
    return "";
}

BSGame.prototype.displayGame = function()
{
    console.log("Name Of Player 1: ", this.player[0].name);
    console.log(this.player[0].table.createTable());
    this.player[0].table.setAllShips();
    console.log(this.player[0].table.displayTable());
    console.log("Name Of Player 2: ", this.player[1].name);
    console.log(this.player[1].table.createTable());
    this.player[1].table.setAllShips();
    console.log(this.player[1].table.displayTable());

    return "";
}