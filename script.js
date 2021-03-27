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
    //console.log(winner);
    return winner;
}

//playRound();

// game
// A function that plays 5 games 

function game(){
    //Definition of variables
    let i, scorecomputer=0, scoreplayer=0, result, score;
    // For loop that goes 5 times
    for (i=1; i<=5 ; i++){
        score = playRound();
        console.log("Round: ", i)
        console.log(score);
        // Return the result in text after every round and save the score to variables scorecomputer and scoreplayer
        //if computer wins round
        if (score == "computer"){
            scorecomputer ++;
            console.log("Computer wins round. Score for player:", scoreplayer,"Score for computer:", scorecomputer);
        };
        //if player wins round
        if (score == "player"){
            scoreplayer ++;
            console.log("Player wins round. Score for player:", scoreplayer,"Score for computer:", scorecomputer);
        };
    }
    //"Decision" who has won
    if (scorecomputer > scoreplayer){
        result = "computer";
    };
    if (scorecomputer < scoreplayer){
        result = "player";
    };
    if (scorecomputer == scoreplayer){
        result = "tie";
    };
    //Proclamation of result
    if (result == "tie") {
        console.log(result, " what a waste of time, lest play again!", scoreplayer, "to", scorecomputer);
    } else {
    console.log(result, " has won the game!", scoreplayer, "to", scorecomputer);
    }
    return result;
}

game();
