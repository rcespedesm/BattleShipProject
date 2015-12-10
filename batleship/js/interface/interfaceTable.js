/**
 * Created by rodrigocespedes on 12/9/2015.
 */
function shot(a)
{

    game.player[0].preShot(a);
}

//$(document).ready(function() {
    function drawTable(size, name){

        var tableContainer = '<div id = "'+ name + '"></div> ';
        $('body').append(tableContainer);


        var row = 0;
        var sizeCell = 30;
        var sizeTable = (size*sizeCell)+(2*size);
        var table = '<div class = "table" id="' + name+ '" style="width: ' + sizeTable
            + 'px;height: ' + sizeTable + 'px;">';
        for(var i = 0;i < size*size;i++){
            var cell = '<div id ="' + (i + 1) +'" class = "cell" style="width: '
                + sizeCell + 'px;height: ' + sizeCell
                + 'px;" ></div>';
            table = table + cell;
        }
        table = table + '</div>';

        $('#'+name).append(table);
        $('.cell').on('click', game.changeTurn());
    }
//});
