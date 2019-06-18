//Pick: (1) Rock (2) Paper (3) Scissors

const computerChoice = Math.floor(Math.random() * 3) + 1;
console.log(computerChoice);

const playGame = function(playerChoice, computerChoice){
    if(playerChoice == 1 && computerChoice == 3 || playerChoice == 2 && computerChoice == 1 || playerChoice == 3 && computerChoice == 2){
        return 'User wins!';
    }
    if(playerChoice == 1 && computerChoice == 2 || playerChoice == 2 && computerChoice == 3 || playerChoice == 3 && computerChoice == 1){
        return 'User loses!';
    }
    if(playerChoice == 1 && computerChoice == 1 || playerChoice == 2 && computerChoice == 2 || playerChoice == 3 && computerChoice == 3){
        return 'Tie!';
    }
    
}

playGame(1, computerChoice);
