console.log('bism allah');
// There are three choice to select only one from (r,p,s) 
// the program shall compare user-choice vs comp-chioce
// the result will be as follow
// r=r p=p s=s -> a tie
// user : r>s s>p p>r -> beats
// else : -> lose


//playing a game of five rounds
playGame();

//playing a game
function playGame() {
    //intializing scores
    userScore = +0;
    computerScore = +0;

    //while userScore and computerScore < 5 keep playing
    //one of them should be more than 5 to stop.
    while (userScore < 5 && computerScore < 5) {
        //getting the choices from user and computer
        userChoice = getUserChoice();
        console.log('user: ' + userChoice);
        computerChoice = getComputerChoice();
        console.log('comp: ' + computerChoice);

        //apply the game rules
        result = playRound(userChoice, computerChoice);
        switch (result) {
            case 'win':
                userScore++;
                break;
            case 'lose':
                computerScore++;
                break;
            default:
                break;
        }
        console.log("userScore: " + userScore + "\ncomputerScore: " + computerScore);
    }
    //decide the winner
    if (userScore > computerScore) {
        console.log("You WIN!");
        alert("You WIN!");
    }
    else {
        console.log("You LOSE!");
        alert("You LOSE!");
    }
}

// function for computer choice
// returns one of three choices randomly
function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3) + 1;
    switch (+randomNum) {
        case 1:
            return "rock"
        case 2:
            return "paper"
        case 3:
            return "scissors"
    }
}

// function for user choice.
// taking the choice from user and making it lower case.
function getUserChoice() {
    return prompt("type your selection: \neg: rock/ paper/ scissors", `${getComputerChoice()}`).toLowerCase();
}


/**
 * function to compare and decide who wins
 *
 * @param {String} userChoice
 * @param {String} compChoice
 * @return {String} the user situation : (tie, win, lose) 
 */
function playRound(userChoice, compChoice) {
    //tie case
    if (userChoice == compChoice) {
        return "tie"
    }
    //user wins in these situations
    if (userChoice == 'rock' && compChoice == 'scissors' ||
        userChoice == 'paper' && compChoice == 'rock' ||
        userChoice == 'scissors' && compChoice == 'paper') {
        return "win";
    }
    //user loses in these situations
    if (compChoice == 'rock' && userChoice == 'scissors' ||
        compChoice == 'paper' && userChoice == 'rock' ||
        compChoice == 'scissors' && userChoice == 'paper') {
        return "lose";
    }
}

