/**
 * Created by rodrigocespedes on 12/9/2015.
 */

function setEventCell()
{
    $('.cell').on('click', function(e){game.changeTurn(e.target);});
}

function drawWin(player) {
    $('.cell').off('click');
    $("#winner").fadeIn(3000);
    $("#winner").text(player.name + ' WIN..!!');
    var playAgain = '<input id="playAgain" value="Play Again" type="button" onclick="playAgain();">';
    $("#winner").append(playAgain);

}

function playAgain() {
    $(".player").remove();
    $( ".configuration" ).css('display','block');
    $('#namePlayer1').val("");
    $('#namePlayer2').val("");
    $("#winner").css('display','none');
}

function drawShot(e, name)
{
    var player = e.parentNode.id;
    var cell = e.id;
    if(name !== '0')
    {
        $('#' + player + ' #' + e.id).attr('class', 'cellShot');
    }
    else
        $('#' + player + ' #'+ e.id).attr('class', 'cellFail');

    $('#' + player + ' #'+ e.id).off('click');
}


//$(document).ready(function() {
    function drawTable(size, name){

        var tableContainer = '<div class = "player" id = "'+ name + '"><div class="subtitle">' + name + '</div><br></div> ';
        $('.game').append(tableContainer);
        var row = 0;
       /* var sizeCell = 50;
        var sizeTable = (size*sizeCell)+(2*size);      */

        var sizeTable = 420;
        var sizeCell = (sizeTable/size) - 2;

        var table = '<div class = "table" id="' + name + '" style="width: ' + sizeTable
            + 'px;height: ' + sizeTable + 'px;">';
        for(var i = 0;i < size*size;i++){
            var cell = '<div id ="' + (i + 1) +'" class = "cell" style="width: '
                + sizeCell + 'px;height: ' + sizeCell
                + 'px;" ></div>';
            table = table + cell;
        }
        table = table + '</div>';

        $('#' + name).append(table);
    }
//});
