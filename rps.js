const playGame = function (userInput) {
    let randomNum = Math.floor(Math.random() * Math.floor(3));
    let computerInput = ""
    if (randomNum == 0) {
        computerInput += "rock";

    } else if (randomNum == 1) {
        computerInput += "paper";
    } else {
        computerInput += "scissors"

    }
    if (userInput === computerInput) {
        return "Tie";
    } else if ((userInput == "rock") && (computerInput == "paper")) {
        return "Computer picked " + computerInput + ". User picked " + userInput + ". Computer Win!"
    } else if ((userInput == "paper") && (computerInput == "scissors")) {
        return "Computer picked " + computerInput + ". User picked " + userInput + ". Computer Win!";
    } else if ((userInput == "scissors") && (computerInput == "rock")) {
        return "Computer picked " + computerInput + ". User picked " + userInput + ". Computer Win!";
    } else {
        return "Computer picked " + computerInput + ". User picked " + userInput + ". User Win!";
    }
}
playGame("rock")