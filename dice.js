const rollDice = function(){
    const firstRoll = Math.floor(Math.random() * 6) + 1;
    const secondRoll = Math.floor(Math.random() * 6) + 1;

    return `Dice rolled are ${firstRoll} and ${secondRoll}. Sum is ${firstRoll + secondRoll}`;
}