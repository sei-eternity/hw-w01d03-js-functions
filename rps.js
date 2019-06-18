

const playGame = function() {
    const userPick = prompt('Enter your pick:');

    const rps = ['rock', 'paper', 'scissors'];
    const randIndex = Math.floor(Math.random() * 3);
    computerPick = rps[randIndex];
    
    const win = 'User win';
    const lose = 'User lose';
    let score = '';
    switch(userPick){
        case 'rock': 
            if(computerPick === 'paper')
                score = lose;
            else if (computerPick === 'scissors')
                score = win
            break;
        case 'paper':
            if(computerPick === 'rock')
                score = win;
            else if(computerPick === 'scissors')
                score = lose;
            break;
        case 'scissors':
            if(computerPick === 'rock')
                score = lose;
            else if(computerPick === 'paper')
                score = win;
            break;
        default:
            return 'Sorry you must enter rock, paper or scissors'
    }

    if(!score)
        score = 'Tie';
    return `Computer picked: ${computerPick}. User picked: ${userPick}. ${score}.`
}

