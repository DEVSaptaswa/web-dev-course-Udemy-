var player1 = prompt("Player One: Enter your name, you will be Blue");
var player1Color = "rgb(86, 151, 255)";

var player2 = prompt("Player Two: Enter your name, you will be Red");
var player2Color = "rgb(237, 45, 73)";

var game_on = true;
var table = $("table tr")

function reportWin(rowNum, colNum) {
    console.log("You won starting at this row, col");
    console.log(rowNum);
    console.log(colNum);
}

// Function to change color
function changeColor(rowIndex, colIndex, color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

// Function to report color
function reportColor(rowIndex, colIndex) {
    return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color");
}

// Function to check if the bottom button is gray
function checkBottom(colIndex) {
    var colorReport = reportColor(5,colIndex);
    for (var row = 5; row > -1; row--) {
        colorReport = reportColor(row,colIndex);
        if (colorReport === 'rgb(128, 128, 128)') {
            return row
        }
    }
}

// grabs 4 button non-gray buttons to check if they are the same color
function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'rgb(128, 128, 128)' && one !== undefined);
}

// checks horizontal wins
function horizontalWinCheck() {
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) { // 4 since, if we go above that the checking will go outside the board, into undefined
            if (colorMatchCheck(reportColor(row, col), reportColor(row, col+1), reportColor(row, col+2), reportColor(row, col+3))) {
                reportWin(row, col);
                console.log("horiz");
                return true;
            } else {
                continue;
            }
        }
    }
}

// checks vertical wins
function verticalWinCheck() {
    for (let col = 0; col < 7; col++) {
        for (let row = 0; row < 3; row++) { // 4 since, if we go above that the checking will go outside the board, into undefined
            if (colorMatchCheck(reportColor(row, col), reportColor(row+1, col), reportColor(row+2, col), reportColor(row+3, col))) {
                reportWin(row, col);
                console.log("vert");
                return true;
            } else {
                continue;
            }
        }
    }
}

// checks diagonal wins
function diagonalWinCheck() {
    for (let col = 0; col < 4; col++) {
        for (let row = 0; row < 3; row++) { // 4 since, if we go above that the checking will go outside the board, into undefined
            if (colorMatchCheck(reportColor(row, col), reportColor(row+1, col+1), reportColor(row+2, col+2), reportColor(row+3, col+3))) {
                reportWin(row, col); // postive slope check
                console.log("diag");
                return true;
            } else if (colorMatchCheck(reportColor(row+3, col), reportColor(row+2, col+1), reportColor(row+1, col+2), reportColor(row, col+3))) {
                reportWin(row, col); // negative slope check
                console.log("diag");
                return true;
            } else {
                continue;
            }
        }
    }
}

function gameEnd(winningPlayer) {
    for (var col = 0; col < 7; col++) {
        for (var row = 0; row < 7; row++) {
            $('h3').fadeOut('fast');
            $('h2').fadeOut('fast');
            $('h1').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")
            $("table").remove();
        }
    }
}

var currentPlayer = 1;
var currentName = player1;
var currentColor = player1Color;

// Start with Player One
$('h3').text(player1+": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click',function() {

  // Recognize what column was chosen
  var col = $(this).closest("td").index();

  // Get back bottom available row to change
  var bottomAvail = checkBottom(col);

  // Drop the chip in that column at the bottomAvail Row
  changeColor(bottomAvail,col,currentColor);

  // Check for a win or a tie.
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    gameEnd(currentName);
  }

  // If no win or tie, continue to next player
  currentPlayer = currentPlayer * -1 ;

  // Re-Check who the current Player is.
  if (currentPlayer === 1) {
    currentName = player1;
    $('h3').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
    currentColor = player1Color;
  }else {
    currentName = player2
    $('h3').text(currentName+": it is your turn, please pick a column to drop your red chip.");
    currentColor = player2Color;
  }

})