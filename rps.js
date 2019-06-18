//Q1.Rock, Paper, Scissors.
function playGame(userChoose){
let choises = ['rock','paper','scissors'];
let computerChoose = choises[Math.floor(Math.random() * choises.length)];
if(userChoose==computerChoose)	
	return alert('User Choosed '+userChoose+' and Computer Choosed '+computerChoose+' The result is Tie');
else if((userChoose=="paper" && computerChoose=="rock")||(userChoose=="rock" && computerChoose=="paper")||(userChoose=="scissors" && computerChoose=="paper")||(userChoose=="rock" && computerChoose=="scissors")){
	return alert('User Choosed '+userChoose+' and Computer Choosed '+computerChoose+' The result is User Won');
	}
else alert('User Choosed '+userChoose+' and Computer Choosed '+computerChoose+' The result is Computer Won');
}
playGame("rock");
