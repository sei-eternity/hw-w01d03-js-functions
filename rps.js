// 1- Rock, Paper, Scissors
const playgame =function (userchoice){
    userchoice= prompt("Do you choose rock, paper or scissors?");
    let computerChoice=Math.random();
    
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if(computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    console.log("User Choice: " + userchoice);
    console.log("Computer Choice: " + computerChoice);
    
    if (userchoice === computerChoice){
    return "tie"; }
    if(userchoice === "rock") {
        if(computerChoice === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }
    }
    if(userchoice === "paper") {
        if(computerChoice === "rock") {
            return "paper wins";
        } else {
            if(computerChoice === "scissors") {
                return "scissors wins";
        }
    }
    if(userchoice === "scissors") {
        if(computerChoice === "rock") {
            return "rock wins";
        } else {
            if(computerChoice === "paper") {
                return "scissors wins";
            }
        }
    }
    }}
