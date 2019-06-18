const rollDice = function (){
    const diceChoice1 = Math.floor(Math.random() * 6) + 1;
    console.log(diceChoice1);
    const diceChoice2 = Math.floor(Math.random() * 6) + 1;
    console.log(diceChoice2);    
    const sum = diceChoice1 + diceChoice2;
return `Dice rolled are ${diceChoice1} and ${diceChoice2}. Sum is ${sum}`;
}

rollDice();
