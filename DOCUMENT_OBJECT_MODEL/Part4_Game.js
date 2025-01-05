var restart = document.querySelector("button");
var squares = document.querySelectorAll("td");
var turn = document.querySelector("h2");

function clearBoard() {
    for (let index = 0; index < squares.length; index++) {
        squares[index].textContent = "";
        
    }
}

restart.addEventListener("click", clearBoard);

var marker = "X";
function changer() {
    if (this.textContent == "") {
        this.textContent = marker;
    }
    if (marker == "X") {
        marker = "O";
    } else {
        marker = "X";
    }
    turn.textContent = `Turn: ${marker}`;
}

for (let index = 0; index < squares.length; index++) {
    squares[index].addEventListener("click", changer);
    
}