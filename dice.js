const rollDice = function (numRolled){
    var arrayNum =[]; 
    for (var i=0 ; i<numRolled ;i++){
         arrayNum[i]= Math.floor(Math.random() * 6);
    }
    var sum = 0;
    for (var i=0 ; i<numRolled;i++){
     sum+= arrayNum[i];
}
var numbers = arrayNum.join();
return `Dice rolled are ${numbers}. Sum is ${sum}`;
}
rollDice(3);