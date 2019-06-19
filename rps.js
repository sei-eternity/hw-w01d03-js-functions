const playGame = function(hand){
    const handSigns = ['rock', 'paper', 'scissors']

    let result = "";
    let cPick = handSigns[Math.floor(Math.random()*3)]

    if (hand === 'rock'){
        switch (cPick){
            case 'rock':
                result = "Tie.";
                break;
            case 'paper':
                result = "User lose.";
                break;
            default:
                result = "User Win.";
        }

    } else if (hand == 'paper'){
        switch (cPick){
            case 'paper':
                result = "Tie.";
                break;
            case 'scissors':
                result = "User lose.";
                break;
            default:
                result = "User Win.";
        }

    }else if( hand === 'scissors'){
        switch (cPick){
            case 'scissors':
                result = "Tie.";
                break;
            case 'rock':
                result = "User lose.";
                break;
            default:
                result = "User Win.";
        }
    } else {
       return console.log("You can only choose three handsigns rock, paper or scissors");

    }


    
    console.log( `Computer picked: ${cPick}. User picked: ${hand}. ${result}`);
}

playGame("paper");