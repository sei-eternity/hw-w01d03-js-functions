const dice = function (){
  let diceNum1 = Math.floor(Math.random() * Math.floor(6)+1);
  let diceNum2 = Math.floor(Math.random() * Math.floor(6)+1);
  let sum = diceNum1 + diceNum2;
  return `Dice rolled are ${diceNum1},${diceNum2} . Sum is ${sum}`;
}
dice()