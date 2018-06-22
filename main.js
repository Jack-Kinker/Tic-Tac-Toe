var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
]

handleClick = function(event) {
    var cell = event.target;
    
    cell.innerHTML = currentPlayer;
    
    if(currentPlayer === "X" ) {
        playerSelections = playerXSelections;
        nextPlayer = "O";
    } else {
        playerSelections = playerOSelections;
        nextPlayer = "X";
    }
    
    playerSelections.push(parseInt(cell.id));
    console.log(cell.id);
  
    // Swap players
    currentPlayer = nextPlayer;
  }
  
  var cells = document.querySelectorAll("td");
for(var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick)
}

    
      function checkWinner () {
        // Check if player has all values of each combination
        for (var i = 0; i < winningCombinations.length; i ++){
            for (var j = 0; j < winningCombinations[i]; j ++){

            }
        }
    }

        if (playerSelections === winningCombinations) {
            var matches = 0
            matches++;

        }else if() {
(matches > 3) {
         
        return true;
        } else{
            
      
        // if we made it through each combo without returning true,
        // then there were no matches and player did not win
        return false
      }