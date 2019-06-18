function rollDice(random1,random2, random3 ) {

    random1 = Math.floor(Math.random()*6 )+1;
    random2 = Math.floor(Math.random()*6 )+1;
    random3 = Math.floor(Math.random()*6 )+1;
   let diectotal = random1 +random2+ random3 ;
   return (diectotal );
   
   }
    rollDice();
