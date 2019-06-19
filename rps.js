const game1 = function(userRole) {
    var myArray = ["rock","paper","scissors"];

var playGame = myArray[Math.floor(Math.random()*myArray.length)];


if(playGame == userRole){
return "The cumputer plays " + playGame + ", and the user plays " + userRole + " ,so the tie the game"; 
}
 else if (playGame == "rock" && userRole =="scissors")
 {
     return "The computer win";
 }   
 else if (playGame == "scissors" && userRole =="paper")
 {
     return "The computer win";
 } 
 else if (playGame == "paper" && userRole =="rock")
 {
     return "The computer win";
 }
 else if (playGame == "paper" && userRole =="scissors")
 {
     return "The user win";
 }
 else if (playGame == "rock" && userRole =="paper")
 {
     return "The user win";
 }
 else if (playGame == "scissors" && userRole =="rock")
 {
     return "The user win";
 }}

 game1("scissors");