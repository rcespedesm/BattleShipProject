/**
 * Created by rodrigocespedes on 12/1/2015.
 */

function BSGame()
{
    this.player = [];
    this.config = new ConfigurationGame();
    this.flagShot = 0;
    this.score = 0;
}

BSGame.prototype.start = function()
{
    this.config.setConfiguration();
    this.score = this.config.qtyShipsCalculate();
    var playerName = prompt("Name Of Player 1");
    this.player[0] = new Player(playerName, this.config);
    drawTable(this.config.sizeTable, this.player[0].name);
    this.turn = playerName;
    playerName = prompt("Name Of Player 2");
    this.player[1] = new Player(playerName, this.config);
    drawTable(this.config.sizeTable, this.player[1].name);
    setEventCell();
    return "";
}


BSGame.prototype.startInterface = function()
{
    if($('#sizeTable').val() !== "" && $('#namePlayer1').val() !== "" && $('#namePlayer2').val() !== "") {
        if($('#namePlayer1').val() !== $('#namePlayer2').val()) {
            this.config.setConfiguration($('#sizeTable').val());
            this.score = this.config.qtyShipsCalculate();
            this.player[0] = new Player($('#namePlayer1').val(), this.config);
            drawTable(this.config.sizeTable, this.player[0].name);
            this.turn = $('#namePlayer1').val();
            this.player[1] = new Player($('#namePlayer2').val(), this.config);
            drawTable(this.config.sizeTable, this.player[1].name);
            setEventCell();
            this.displayGame();
            $('.configuration').css('display', 'none')
            return "";
        }
        else
        {
            alert('Do not Insert The Same Name');
        }
    }
    else
    {
        alert('Please, Insert Names of Players');
    }

}


BSGame.prototype.changeTurn = function(e)
{
    var playerName = e.parentNode.id;
    if(playerName === this.player[this.flagShot].name)
    {
        var coordinate = this.player[this.flagShot].getCordinate(e.id);
        var name = this.player[this.flagShot].table.battleTable[coordinate['row']][coordinate['column']].name;
        drawShot(e, name);
        if(name !== '0')
            game.player[game.flagShot].points++;

        this.player[this.flagShot].preShot(e.id);
        var winner = this.isWinner(this.player[this.flagShot]);
        if(winner)
            drawWin(this.player[this.flagShot]);

        this.flagShot = this.flagShot === 0 ? 1 : 0;

    }
    else
    {
        alert("Not is your turn..!");
    }
    console.clear();
    game.player[0].table.displayTable();
    game.player[1].table.displayTable();
}

BSGame.prototype.isWinner = function(player)
{
    return player.points === this.score;
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
