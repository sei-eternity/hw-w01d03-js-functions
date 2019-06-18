const playGame = function(a, b = random()) {
    if (a===b){
        console.log('tie')
    }
    else {
        if (a==='rock' && b === 'paper'){
            console.log('b win');
        }
      if (a==='rock' && b === 'scissors'){
            console.log('a win');
        }
      if (a==='scissors' && b === 'paper'){
            console.log('a win');
        }
      if (a==='scissors' && b === 'rock'){
            console.log('b win');
        }
      if (a==='paper' && b === 'scissors'){
            console.log('b win');
        }
      if (a==='paper' && b === 'rock'){
            console.log('a win');
        }
      
    }
}
const random = function() { 
let randumNum = Math.floor(Math.random() * 3) + 1;
let pc =" "
if (randumNum === 1){
  pc ='rock';
};
if (randumNum === 2){
  pc ='paper';
};
if (randumNum === 3){
  pc ='scissors';
  
} 
  return pc;
};


