const rollDice = function(){

let dicRoll1 = Math.floor(Math.random() * Math.floor(6))+1;
let dicRoll2 = Math.floor(Math.random() * Math.floor(6))+1;
let sum = dicRoll1 + dicRoll2;

return `Dice rolled are ${dicRoll1} , ${dicRoll2}. Sum is ${sum}`;
}

rollDice()