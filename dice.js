const randomNumber = function(){
    let random1 = Math.floor(Math.random() * 6) + 1;
    let random2 = Math.floor(Math.random() * 6) + 1;
    let sum = random1 + random2;

    return `Dice rolled are ${random1} and ${random2}. Sum is ${sum}`

};

randomNumber();

// BONUS 

const bonusRandom = function(a){

    const randomN = [];
    let sum = 0;
     for (let i = 0; i < a ; i++){
          
         randomN[i] = Math.floor(Math.random() * 6) + 1;
       
         sum += randomN[i];
       
   
     };
  
  const lastInArray = randomN.pop();
 
      console.log(`Dice rolled are ${randomN} and ${lastInArray} . Sum is ${sum}.`);
};

bonusRandom(4);

