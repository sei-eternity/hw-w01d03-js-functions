const rollDice = function(){
    let randomNum1 = 6 - Math.floor(Math.random() * Math.floor(6));
    let randomNum2 = 6 - Math.floor(Math.random() * Math.floor(6));
    let sum =  randomNum1 + randomNum2;
    return "Dice rolled are "+randomNum1+" and "+randomNum2+". Sum: "+ sum;
   
   }
   rollDice();
   