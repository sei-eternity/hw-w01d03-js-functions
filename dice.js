//Dice Roller game function.
const rollDice = function(){
    //chooses two random numbers (1-6).
    let num1 = Math.floor(Math.random() * 7);
    let num2 = Math.floor(Math.random() * 7);
    console.log(`Dice rolled are ${num1} and ${num2}. Sum is ${num1+num2}`);
    }
//calling the function
rollDice();