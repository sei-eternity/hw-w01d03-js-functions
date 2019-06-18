

var user= prompt("Do you choose rock, paper or scissors?");



var computer = Math.floor(Math.random()*3);
if (computer=== 0) {
  computerChoice = "rock";
  }else if(computer === 1) {
  computer = "paper";
  }else {
  computer = "scissors";
} 




var PlayGame = function(choice1,choice2) {



if (choice1 === choice2) {



return " tie!" ;


}



if (choice1 === "rock" && choice2 === "scissors" ) {




return " You Win !!!! "; }

else { return "Computer Wins!! " }






if (choice1 === "paper" && choice2 === "rock") {



return "You Win !!!! "; }

else {return "computer Wins!!"; }



if (choice1 === "scissors" && choice2 === "rock") {




return "You Win !!!! "; }

else {return "Computer Wins !! "; }





}




console.log ("Computer choose " + computer );


console.log ( PlayGame (user,computer));


