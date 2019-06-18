const playGame = function(userInput){
 let random = Math.floor(Math.random() * Math.floor(3));

let compInput=‘’;
if (random == 0){
 compInput +=‘rock’;
}
if (random == 1){
 compInput +=‘paper’;
}
if (random == 2){
 compInput +=‘scissors’;
}
if (userInput === compInput){
 return “The result is a tie! “+ “computer “+ compInput + ” user ” + userInput;
}
else if ((userInput == ‘rock’) &&(compInput === ‘scissors’)){
 return “The user win “+ “computer “+ compInput + ” user ” + userInput;
}
else if ((userInput == ‘paper’) &&(compInput ===‘rock’)){
 return “The user win “+ “computer “+ compInput + ” user ” + userInput;
 }else if ((userInput == ‘scissors’) &&(compInput ===‘paper’)){
 return “The user win “+ “computer “+ compInput + ” user ” + userInput;
 }
 else{
 return “The computer win “+ “computer “+ compInput + ” user ” + userInput;
 }
}

playGame(‘rock’)