const gameplay = function(userchooses) {
    let choices = ["scissors", "paper", "rock"]
    let random = Math.floor(Math.random() * 3)
    
var computerchoose= choices[random]

if (userchooses==="paper" && computerchoose==="rock" || userchooses==="scissors" && computerchoose==="paper" || userchooses==="rock" && computerchoose==="scissors") {
    console.log("user wins, computer lose"); 
}
if (userchooses==="rock" && computerchoose==="paper"|| userchooses==="paper" && computerchoose==="scissors" || userchooses==="scissors" && computerchoose==="rock") {
   console.log("computer wins, user lose");
}
}

gameplay("rock")
