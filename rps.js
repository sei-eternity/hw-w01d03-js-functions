const playGame = function(userInput){
  let random = Math.floor(Math.random() * Math.floor(3));

let computer='';
if (random == 0){ 
  computer +='rock';  
}
if (random == 1){
  computer +='paper';  
}
if (random == 2){
  computer +='scissors';  
}
if (userInput === computer){
  return "The result is a tie! "+ "computer "+ computer + " user " + userInput;
}
else if ((userInput == 'rock') &&(computer === 'scissors')){
  return "The user win "+ "computer "+ computer + " user " + userInput;
}
else if ((userInput == 'paper') &&(computer ==='rock')){
  return "The user win "+ "computer "+ computer + " user " + userInput;
  }else if ((userInput == 'scissors') &&(computer ==='paper')){
  return "The user win "+ "computer "+ computer + " user " + userInput;
  }
  else{
  return "The computer win "+ "computer "+ computer + " user " + userInput;
  }
}

playGame('rock')

    