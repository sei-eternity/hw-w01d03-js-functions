//Rock–paper–scissors game function
const playGame = function(userChoice){
    
//Create an array for all possible choices to make the computer choose randomly between them.
let arr = new Array('rock', 'paper', 'scissors');
let computerChoice = (arr[Math.floor(Math.random() * (arr.length))]);

if (userChoice === 'rock' && computerChoice ==='paper'){
    return console.log('Computer picked: paper. User picked: rock. User lose.');
}
if (userChoice === 'rock' && computerChoice === 'scissors'){
    return console.log('Computer picked: scissors. User picked: rock. User win');
}
if (userChoice === 'scissors' && computerChoice === 'paper'){
    return console.log('Computer picked: paper. User picked: scissors. User win');
}
if (userChoice === 'scissors' && computerChoice === 'rock'){
    return console.log('Computer picked: rock. User picked: scissors. User lose.');
}
if (userChoice === 'paper' && computerChoice === 'rock'){
    return console.log('Computer picked: rock. User picked: paper. User win');
}
if (userChoice === 'paper' && computerChoice === 'scissors'){
    return console.log('Computer picked: scissors. User picked: paper. User lose');
}
if (userChoice === computerChoice){
    return console.log('`tie (eqaul result)');
}
}
//calling the function with the User's choice as an argument.
playGame('rock');