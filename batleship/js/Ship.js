/**
 *
 * @type type shipState Values for a ship's state.
 */
var shipState = {life: 'life', shot : "shot", die : "die"};
/**
 * Represent a ship in the battleShip Game.
 * @param {Cell} cells Ship's cells on the board of the game.
 * @returns {Ship} A ship
 */
var Ship = function(cells){
    this.cells = cells;
};
/**
 * Return the state of the ship.
 * @returns {shipState} life | shot | die
 */
Ship.prototype.getState = function(){
    var count = 0;
    for(var x = 0; x < this.cells.length; x++){
        if(this.cells[x].name === '+'){
            count++;
        }
    }
// for ship dies
    if(count === this.cells.length){
        return shipState.die;
    }
// for ship shoots
    if(count < this.cells.length){
        return shipState.shot;
    }
//default is life.
    return shipState.life;
};
/**
 * Return the cell of the ship that is in the position x and y on the board.
 * @param {int} x Position X on the board
 * @param {int} y Position Y on the board
 * @returns {Cell} Cell of the ship.
 */
Ship.prototype.getCell = function(x, y){
    for(var i = 0; i < this.cells.length; i++){
        if(this.cells[i].posX === x && this.cells[i].posY === y){
            return this.cells[i];
        }
    }
};
/**
 * Verify if exist a cell with postion X and Y on the ship.
 * @param {type} x Position X on the board
 * @param {type} y Position Y on the board
 * @returns {Boolean} Exist
 */
Ship.prototype.existCell = function(x, y){
    for(var i = 0; i < this.cells.length; i++){
        if(this.cells[i].posX === x && this.cells[i].posY === y){
            return true;
        }
    }
    return false;
};
/**
 * Mark the cell of the ship in the position X and Y.
 * @param {int} x Position X on the board.
 * @param {int} y Position Y on the board.
 * @returns {undefined} if does not mark the cell.
 */
Ship.prototype.markCell = function(x,y){
    if(this.existCell(x,y)){
        this.getCell(x,y).name = '+';
    }
};