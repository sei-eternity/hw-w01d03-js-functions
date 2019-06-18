
const rollDice = function(numOfRolls) {
    const rolls = []
    let total = 0;
    for(let i = 0; i < numOfRolls; i++) {
        rolls[i] = Math.floor(Math.random() * 6) + 1;
        total += rolls[i];
    }

    lastIndex = rolls.length - 1;

    return `Dice rolled are ${rolls.slice(0,lastIndex)} and ${rolls[lastIndex]}. Sum is ${total}`
}

// const rollDice = function(){
//     const firstRoll = Math.floor(Math.random() * 6) + 1;
//     const secondRoll = Math.floor(Math.random() * 6) + 1;

//     return `Dice rolled are ${firstRoll} and ${secondRoll}. Sum is ${firstRoll + secondRoll}`;
// }