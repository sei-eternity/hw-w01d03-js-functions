//Q2.Dice Roller.
function rollDice(){
let nums = [1, 2, 3, 4, 5, 6];
let num1 = nums[Math.floor(Math.random() * nums.length)];
let num2 = nums[Math.floor(Math.random() * nums.length)];

return alert('Dice rolled are '+num1+' and '+num2+'. Sum is '+num1+num2);
}
rollDice();


