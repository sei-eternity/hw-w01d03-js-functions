

const rollDice = function(noOfRolls = 2){
  let total = 0;
  let num;
  let string = "";


  for (let i = 0; i < noOfRolls; i++){
    num =  Math.floor((Math.random()*6)+1);
    string += num
    total += num
    if ( i == noOfRolls - 1){
        continue;
    } else if ( i == noOfRolls - 2 ){
        string += ' and ';
    } else {
        string += ', '
    }
  }

  return `Dice rolled are ${string}. Sum is ${total}.`
}
console.log(rollDice(3));