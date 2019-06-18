const playGame = function(userSelect){


const myArray = ["rock", "paper", "scissors"];
let randomN = Math.floor(Math.random() * 3);
let computerSelect = myArray[randomN];
let winMessage = "";
if (userSelect !== "rock" && userSelect !== "paper" && userSelect !== "scissors"){

    return `Do you think me stupid!? ${userSelect} is not part of the game ;)`;
}else {
if(userSelect === computerSelect){
    winMessage = "it is a tie!"
}
// all the cases when user win
if (userSelect === "rock" && computerSelect === "scissors" ||
    userSelect === "paper" && computerSelect === "rock" ||
    userSelect === "scissors" && computerSelect === "paper"){
        winMessage = "User win!";
} 
if (userSelect === "scissors" && computerSelect === "rock" ||
    userSelect === "rock" && computerSelect === "paper" ||
    userSelect === "paper" && computerSelect === "scissors"){
        winMessage = "User lose!";
}

return `Computer picked: ${computerSelect}. User picked: ${userSelect}.${winMessage}`;

}
}