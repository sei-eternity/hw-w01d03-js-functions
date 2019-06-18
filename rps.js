const playGame = function(userChoice){
    let com = new Array('Rock', 'Paper', 'Scissors');
    let comChoice = com[Math.floor(Math.random()*3)]
console.log(comChoice)
    if ((userChoice==="rock"&& comChoice==="Scissors" )|| (userChoice==="paper" && comChoice==="Rock")||(userChoice==="scissors" && comChoice==="Paper"))
    console.log("user win")
    else if ((comChoice==="Rock"&& userChoice==="scissors" )|| (comChoice==="Paper" && userChoice==="rock")||(comChoice==="Scissors" && userChoice==="paper"))
    console.log("com win")

else {
console.log("tie")
    
   
}
}
playGame('rock')