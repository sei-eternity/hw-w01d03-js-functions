const rPs = ["Rock", "Paper", "Scissors"];

const you = rPs[Math.floor(Math.random() * 3)];

const computer = rPs[Math.floor(Math.random() * 3)];

random(you, computer);

function random(you, computer){
    if (you===computer){
         console.log ("It's a tie!");
    } else if (you==="Rock" && computer === "Scissors" || you === "Paper" && computer==="Rock"||you==="Scissors"&&computer==="Paper") {
         console.log ("You've won!");
    } else {
         console.log ("You've lost!");
    }
}