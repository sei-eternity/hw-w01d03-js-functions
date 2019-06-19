userChoice = prompt("Choose Rock, paper or Scissors..")
computerChoice = Math.random();
if (computerChoice < 0.34) {
   console.log("Computer played rock");
} else if(computerChoice <= 0.67) {
   console.log("Computer played paper");
} else {
   console.log("Computer played scissors");
}



const rpsGame = function (p1, p2){
   if ((userChoice === 'rock' & computerChoice === 'scissors') ||
   (userChoice === 'scissors' & computerChoice === 'paper') ||
   (userChoice === 'paper' & computerChoice === 'rock'))
        console.log("You win")
};       if (userChoice === computerChoice) {
        console.log("It's a Tie")
} else {
console.log(" You lose")};
rpsGame(userChoice,computerChoice);