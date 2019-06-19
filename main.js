1- const UserChoice = function (num) {
    if (num === 'rock' || num === 'paper' || num === 'scissors') {
     return num;
   } else {
     console.log('lose');
   }
 }
 
 const ComputerChoice = function (num) {
   
   
   switch (Math.floor(Math.random() * 3)) {
     case 0:
       return 'rock';
     case 1:
       return 'paper';
     case 2:
       return 'scissors';
 }
 }
 
 function determineWinner(UserChoice, ComputerChoice) {
 if (UserChoice === ComputerChoice) {
   return 'tie!';
  if (UserChoice === 'rock') {
    if (ComputerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You Won!';
     
 if (UserChoice === 'paper') {
   if (ComputerChoice === 'scissors') {
     return 'The computer won!';
   } else {
     return 'You won!';
   }
      }
      }
 }
  }
 }const playGame = () => {
     const userChoice = getUserChoice('scissors');
     const computerChoice = getComputerChoice();
     console.log('You threw: ' + userChoice);
     console.log('The computer threw: ' + computerChoice);
     console.log(determineWinner(getUserChoice, getComputerChoice));
 }
 
 playGame();
 
 
 
 
 
 2-  var min=1;
     var max=6; 
     var random =Math.floor(Math.random() * (max + min)) 
     console.log ("Random Number = + random )
 
 
 3- a- search()
 string for a specified value and returns the position 
 var pos = str.search(“munirah");
 
 b- indexOf()
 return -1 if the text is not f
 var pos = str.lastIndexOf(“munirah");
 
 
 c- indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:
 var pos = str.indexOf("locate”);