function rollDice()
{
  var rand = Math.round(Math.random() * 6);
   var rand2 = Math.round(Math.random() * 6);
   let sum =rand+rand2;
  console.log("Dice rolled are "+rand+" and "+rand2+" Sum is "+sum+" ");
 

}

 rollDice();