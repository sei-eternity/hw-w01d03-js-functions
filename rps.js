
computerPlayer = Math.random();
if (computerPlayer < 0.34) {
    console.log("Computer played rock");
} else if(computerPlayer <= 0.67) {
    console.log("Computer played paper");
} else {
    console.log("Computer played scissors");
}
userPlayer = prompt("Rock, paper or Scissors?")


const rpsGame = function (p1, p2){
    if ((userPlayer === 'rock' & computerPlayer === 'scissors') ||
    (userPlayer === 'scissors' & computerPlayer === 'paper') ||
    (userPlayer === 'paper' & computerPlayer === 'rock')) 
         console.log("You win")
};       if (userPlayer === computerPlayer) {
         console.log("It's a Tie")
} else {
console.log(" You lose")};
rpsGame(userPlayer,computerPlayer);

