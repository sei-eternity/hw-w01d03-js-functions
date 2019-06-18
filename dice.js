//-------------- Dice Roller--------------

function rolldice() {
    let x = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    let y = Math.floor(Math.random() * ((6 - 1) + 1) + 1);
    console.log(`Dice rolled are ${x} and ${y}. Sum is ${x+y}`);
};