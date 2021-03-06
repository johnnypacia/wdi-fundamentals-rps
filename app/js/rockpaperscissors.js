////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var move; 
    move || 'getInput()';
    return move || 'getInput()';
}

function getComputerMove(move) {
    var move;
    move || 'randomPlay()';
    return move || 'randomPlay()';
}

function getWinner(playerMove,computerMove) {
    var winner;

    if(playerMove === computerMove) {
        winner = 'tie';
    }
    else if(playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
    }
    else if(playerMove === 'paper' && computerMove === 'scissors') {
        winner = 'computer';
    }
    else if(playerMove === 'rock' && computerMove === 'paper') {
        winner = 'computer';
    }
    else if(playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
    }
    else if(playerMove === 'scissors' && computerMove === 'rock') {
        winner = 'player';
    }
    else if(playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
    } 
    else {
        console.log('try again');
    }
    return winner;
}


function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while(computerWins < 5 && playerWins < 5){
        var playerChoice = getPlayerMove();
        var computerChoice = getComputerMove();
        var roundWinner = getWinner(playerChoice, computerChoice);

            if(roundWinner == 'player'){
                playerWins++;
                console.log("PLAYER:" + playerChoice + "vs." + "COMPUTER:" + computerChoice);
                console.log('Player wins.');
                console.log('SCORE:' + playerWins + 'to' + computerWins + '\n');
            }
            else if(roundWinner == 'computer'){
                computerWins++;
                console.log("PlAYER:" + playerChoice + "vs." + "COMPUTER:" + computerChoice);
                console.log('Computer wins.');
                console.log('SCORE:' + playerWins + 'to' + computerWins + '\n');
            }
            else if(roundWinner == 'tie'){
                console.log('Tie. Try again.');
                console.log('SCORE:' + playerWins + 'to' + computerWins + '\n');
            }
    }

    return [playerWins, computerWins];
}

