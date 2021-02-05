function playRound(playerSelection, computerSelection){

    let playerChoice = document.getElementById("player-choice");
    

    let outcome = "";

    if(playerSelection === "sword"){
        playerChoice.src=swordImage;
        if(computerSelection === "sword") outcome = "tie";
        if(computerSelection == "bow") outcome = "win";
        if(computerSelection === "staff") outcome = "lose";
    }

    else if(playerSelection === "bow"){
        playerChoice.src=bowImage;
        if(computerSelection === "sword") outcome = "lose";
        if(computerSelection == "bow") outcome = "tie";
        if(computerSelection === "staff") outcome = "win";
    }

    else if(playerSelection === "staff"){
        playerChoice.src=staffImage;
        if(computerSelection === "sword") outcome = "win";
        if(computerSelection == "bow") outcome = "lose";
        if(computerSelection === "staff") outcome = "tie";
    }

    playAnimations(playerSelection, computerSelection);
    roundMessage(playerSelection, computerSelection, outcome);


    return outcome;
    
}

function playAnimations(playerSelection, computerSelection){
    let playerChoice = document.getElementById("player-choice");
    playerChoice.style.animation ="none";
    playerChoice.offsetHeight;
    playerChoice.style.animation = null;
    playerChoice.style.animation ="player-clash 2s";

    let computerChoice = document.getElementById("computer-choice");
    computerChoice.style.animation = "none";
    computerChoice.offsetHeight;
    computerChoice.style.animation = null;
    computerChoice.style.animation = "computer-clash 2s";
}

function roundMessage(player, computer, outcome){
    let roundMessage;


    if(outcome === "win"){
        roundMessage = "You win! " + player +
        " beats " + computer + ".";

        pScore++;
        document.getElementById("player-score").innerHTML = pScore;
    }

    else if(outcome ==="lose"){
        roundMessage = "You lose! " + computer +
        " beats " + player + ".";

        cScore++;
        document.getElementById("computer-score").innerHTML = cScore;
    }

    else{
        roundMessage = "You tied! You both played " + 
        player +".";
    }

    document.getElementById("message").style.color = "rgba(9, 8, 71, 0.952)";
    document.getElementById("message").innerHTML = roundMessage;


    evaluateGame(pScore, cScore);

    return roundMessage;
}

function evaluateGame(pScore, cScore){
    if(pScore === 5 || cScore === 5){
        document.getElementById("sword").removeEventListener("click", playSword);
        document.getElementById("bow").removeEventListener("click", playBow);
        document.getElementById("staff").removeEventListener("click", playStaff);
        document.getElementById("restart-button").style.visibility = "visible";
    }
    if(pScore === 5){
        document.getElementById("message").innerHTML = "Congratulations, you've won!!!";
        document.getElementById("message").style.color = "rgba(1, 56, 0, 0.85";
    }

    else if(cScore === 5){
        document.getElementById("message").innerHTML = "Oh no, you've been defeated!!!";
        document.getElementById("message").style.color = "rgba(56, 2, 0, 0.85)";
    }
}


function computerPlay(){
    let computerChoice = document.getElementById("computer-choice");
    let number = Math.floor(Math.random() * Math.floor(3));;

    let choice = "";

    switch(number){
        case 0:
            choice = "sword";
            computerChoice.src =swordImage;
            break;
        
        case 1:
            choice = "bow";
            computerChoice.src = bowImage;
            break;

        case 2:
            choice = "staff";
            computerChoice.src = staffImage;
            break;

        default:
    }

    return choice.toLowerCase();;
}

/*
function getChoice(){
    let choice = "";

    while(choice != "rock" && choice != "paper" && choice != "scissors"){
        choice = window.prompt("Type rock, paper or scissors into the box.").toLowerCase();
    }

    return choice;
}



function game(){
    let outcome;
    let pScore = 0;
    let cScore = 0;
    
    let pChoice;
    let cChoice;

    while(pScore < 5 && cScore < 5){
        pChoice = getChoice();
        cChoice = computerPlay();

        outcome = playRound(pChoice, cChoice);

        if(outcome === "win") pScore++;
        else if(outcome === "lose") cScore++;

        console.log(roundMessage(pChoice, cChoice, outcome, pScore, cScore));

    }

    if(pScore == 5) console.log("You won the game with a score of " + pScore + "!");
    else console.log("You lost the game! Your score was " + pScore + ".");
}


game();

*/

function playSword(){
    playRound("sword", computerPlay());
}

function playBow(){
    playRound("bow", computerPlay());
}

function playStaff(){
    playRound("staff", computerPlay());
}

function newGame(){
    pScore = 0;
    cScore = 0;

    document.getElementById("sword").addEventListener("click", playSword);
    document.getElementById("bow").addEventListener("click", playBow);
    document.getElementById("staff").addEventListener("click", playStaff);

    document.getElementById("player-score").innerHTML = pScore;
    document.getElementById("computer-score").innerHTML = cScore;

    document.getElementById("restart-button").style.visibility = "hidden";

    document.getElementById("message").innerHTML = "";

}

let pScore;
let cScore;

document.getElementById("restart-button").addEventListener("click", newGame);

let swordImage = "https://img.icons8.com/office/48/000000/sword.png";
let bowImage = "https://img.icons8.com/emoji/48/000000/bow-and-arrow-emoji.png";
let staffImage = "https://img.icons8.com/color/48/000000/staff-stick.png";

newGame();