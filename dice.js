const rollDice1 = function(numOne, numTwo){
    var myArray = [1,2,3,4,5,6];

var numOne = myArray[Math.floor(Math.random()*myArray.length)];
var numTwo = myArray[Math.floor(Math.random()*myArray.length)];

    const sum = numOne + numTwo;
    return "Dice rolled are " + numOne + " and " + numTwo + " . Sum is " + sum ;}