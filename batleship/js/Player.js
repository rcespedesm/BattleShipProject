/**
 * Created by rodrigocespedes on 12/7/2015.
 */

/**
 *
 * @param name
 * @param config
 * @constructor
 */

function Player(name, config)
{
    this.name = name;
    this.table = new Table(config);

}

Player.prototype.shot = function(x, y){
    this.table.battleTable[x][y].name = "+";

    for(var i = 0;i < this.table.ships.length;i++)
    {
        this.table.ships[i].markCell(x, y);
    }
}
