const userChoice = prompt("Do you choose rock, paper or scissors?");

var computer= Math.random();

 if (computer < 0.30) {
    computer = 'rock';
 } else if(computer <= 0.42) {
    computer = 'paper';
 } else {
    computer = 'scissors';
 } 

const playGame = function(userChoice,computer){
let rseult;

    if (userChoice === computer){
       return "it is a tie";
    }
if(userChoice ==="rock" && computer === "scissar")
{
    return "winner";

} else{
    return "You lose! Try again.";
}

 if (userChoice === "scissar" && computer ==="paper" ){
   return "winner";
} else{
    return "You lose! Try again.";
}
 

 if (userChoice === "paper"  && computer ==="rock"){
    return "winner";
} else{
    return "You lose! Try again.";
}
return rseult;
};
 playGame (userChoice,computer);
