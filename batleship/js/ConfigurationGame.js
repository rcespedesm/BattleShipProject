/**
 * Created by rodrigocespedes on 12/7/2015.
 */
function ConfigurationGame(sizeTable)
{
    this.sizeTable = sizeTable;
    this.sizeShips = [];
}

ConfigurationGame.prototype.setConfiguration = function(sizeTable)
{
    this.sizeTable = sizeTable;
}

ConfigurationGame.prototype.qtyShipsCalculate = function()
{
    var qty = Math.round(((this.sizeTable * this.sizeTable) * 35) / 100);
    var score = qty;
    var shipsSize = [];
    do{
        var size = Math.round(Math.random() * 2) + 1;
        if((qty - size) >= 0)
        {
            shipsSize.push(size);
            qty = qty - size;
        }
    }while(qty > 0);
    this.sizeShips = shipsSize;
    return score;
}