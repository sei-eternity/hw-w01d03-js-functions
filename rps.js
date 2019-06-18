


const playGame = function(choice){

let com = new Array('rock' , 'paper' , 'scissors');

min = Math.ceil(0);
  max = Math.floor(3);

let comChoice = com[Math.floor(Math.random() * (max - min)) + min];

if (choice === comChoice )
	return `Computer picked: ${comChoice}. User picked: ${choice}. Its a tie .`;

else if (choice == "rock" && comChoice == "paper")
	return "Computer picked: paper. User picked: rock. User lose.";

else if (choice == "paper" && comChoice == "rock")

	return "Computer picked: rock. User picked: paper. User wins.";


else if (choice == "paper" && comChoice == "scissors")

	return "Computer picked: scissors. User picked: paper. User lose.";

else if (choice == "rock" && comChoice == "scissors")

	return "Computer picked: scissors. User picked: rock. User wins.";


else if (choice == "scissors" && comChoice == "paper")

	return "Computer picked: paper. User picked: scissors. User wins.";


else if (choice == "scissors" && comChoice == "rock")

	return "Computer picked: rock. User picked: scissors. User loses.";

}