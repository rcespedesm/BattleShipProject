/**
 * Created by rodrigocespedes on 12/7/2015.
 */

function Table(config)
{
    this.size = config.sizeTable;
    this.battleTable = [];
    this.qtyShips = config.sizeShips;

    this.ships = [];
}



Table.prototype.createTable = function()
{
    for(var i = 0;i < this.size; i++)
    {
        var row = [];
        for(var j = 0;j < this.size; j++)
        {
            row[j] = new Cell(i, j);
        }
        this.battleTable[i] = row;
    }
    return "";
}

Table.prototype.displayTable = function()
{
    console.log(this.qtyShips);
    var column = "/" + " |";
    for(var i = 0;i < this.size; i++)
    {
        column = column + " " + (i);
    }
    console.log(column);
    for(var i = 0;i < this.size; i++)
    {
        var row = "";
        for(var j = 0;j < this.size; j++) {
            row = row + this.battleTable[i][j].name + " ";
        }
        console.log((i) + " | " +row);
    }
    return "";
}

Table.prototype.setAllShips = function()
{
    for (var i = 0; i < this.qtyShips.length; i++) {
        this.setShip(i);
    }

    console.log(this.ships);
}

Table.prototype.setShip = function(index)
{
    var shipBody = [];
    do {
    var column = Math.round(Math.random() * (this.size - this.qtyShips[index]));
    var row = Math.round(Math.random() * (this.size - this.qtyShips[index]));
    var position = Math.round(Math.random() * 1);
    var verify = this.verifyPlace(column, row, position, this.qtyShips[index]);
    }while(verify == false);

    if(verify == true) {
        if(position === 1) {
            for (var i = row; i < (row + this.qtyShips[index]); i++) {
                this.battleTable[i][column].name = (index + 1);
                shipBody.push(this.battleTable[i][column]);
            }
        }
        else {
            for (var i = column; i < (column + this.qtyShips[index]); i++) {
                this.battleTable[row][i].name = (index + 1);
                shipBody.push(this.battleTable[row][i]);           }
        }
    }
    this.ships.push(new Ship(shipBody));
    return '';
}

Table.prototype.verifyPlace = function(col, row, pos, size)
{
    if(pos === 1)
    {
        for(var i = row;i < (size + row);i++)
        {
            if(this.battleTable[i][col].name != "0")
            {
                return false;
            }
        }
    }
    else
    {
        for(var i = col;i < (size + col);i++)
        {
            if(this.battleTable[row][i].name != "0")
            {
                return false;
            }
        }
    }
    return true;
}