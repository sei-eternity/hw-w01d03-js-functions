const playGame = function (userChoice){
    var computerChoice = Math.floor(Math.random()*3)+1;// multiply by 2 to have number from 1-3 instead of from 0-1
//Assigning rock , paper or scissors for computerChoice
    if  (computerChoice === 1) {
        computerChoice = "rock";}
   else if  (computerChoice === 2) {
        computerChoice = "paper";}
    else {
        computerChoice = "scissors";}
//start of matching choices
    if (computerChoice === "paper") {
        if (userChoice === "rock") {
            return `Computer picked: ${computerChoice}. User picked: ${userChoice}. User lose.`;}
        else if (userChoice === "scissors") {
            return `Computer picked: ${computerChoice}. User picked: ${userChoice}. User win.`;}
         else{
            return `Computer picked: ${computerChoice}. User picked: ${userChoice}. tie.`; }}
   if (computerChoice === "rock") {
        if (userChoice === "rock") {
           return `Computer picked: ${computerChoice}. User picked: ${userChoice}. User tie.`;}
        else if (userChoice === "scissors") {
           return `Computer picked: ${computerChoice}. User picked: ${userChoice}. User lose.`;}
        else{
            return `Computer picked: ${computerChoice}. User picked: ${userChoice}. User win.`;}}   
   if (computerChoice === "scissors") {
        if (userChoice === "rock") {
           return `Computer picked: ${computerChoice}. User picked: ${userChoice}. User win.`;}
        else if (userChoice === "scissors") {
           return `Computer picked: ${computerChoice}. User picked: ${userChoice}. tie.`;}
        else{
            return `Computer picked: ${computerChoice}. User picked: ${userChoice}. User lose.`;}}   

}

