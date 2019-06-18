


const rollDice = function(){


min = Math.ceil(1);
max = Math.floor(6);
let dice1 = Math.floor(Math.random() * (max - min)) + min;

let dice2 = Math.floor(Math.random() * (max - min)) + min;

return `Dice rolled are ${dice1} and ${dice2}. Sum is ${dice1 + dice2}`;


}