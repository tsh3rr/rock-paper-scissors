'use strict'
// computerPlay 
// A function that outputs the "selection" of the computer to consol
function computerPlay() {
    // Choosing random between 3 options rock - paper - scissors
    let options = ["rock","paper","scissors"];
    let randomselection = Math.floor(Math.random() * options.length);
    // Outputting the result as return
    console.log("Computer chooses:", options[randomselection])
    return options[randomselection];
}


// playerSelection
// A function that takes one of the 3 options from the users keyboard (prompt)
function playerSelection() {
    //Prompting user for the input of rock - paper - scissors for the first time
    let playerselection = prompt("Type in one of those: Rock, Paper or Scissors!");
    // Making the input case insensitive
    playerselection = playerselection.toLowerCase();
    // Using a while loop to prompt the person to put in rock - paper - scissors,
    // If the person does not type one of those - repeat  
    while (playerselection != "rock" && playerselection != "paper" && playerselection != "scissors"){
        playerselection = prompt("Type in Rock, Paper or Scissors and nothing else!")
        // Making the input case insensitive
        playerselection = playerselection.toLowerCase();
    }
    // Outputting the result as return
    console.log("Player chooses:", playerselection)
    return(playerselection)

}

// playRound
// A function that utilises the previous functions to play a round of the game

function playRound() {
    let computer = computerPlay();
    let player = playerSelection();
    let winner;
    if (//Computer wins
        // scissors beat paper
        (computer == "scissors" && player == "paper") || 
        // paper beats rock
        (computer == "paper" && player == "rock") ||
        // rock beats scissors
        (computer == "rock" && player == "scissors")
        ){
        winner = "computer";
    }
    if (//Player wins
        // scissors beat paper
        (player == "scissors" && computer == "paper") || 
        // paper beats rock
        (player == "paper" && computer == "rock") ||
        // rock beats scissors
        (player == "rock" && computer == "scissors")
        ){
        winner = "player";
    }
    //Tie
    if (player == computer){
        winner = "tie";
    }
    //Putting out result as text and as return (player or computer)
    console.log(winner);
    return winner;
}

playRound();

// game
// A function that plays 5 games 
// While loop that goes 5 times or until score is 3 - 0 (because the oponent can not catch up at this point)
// Return the result in text after every round