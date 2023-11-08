const playerText = document.querySelector('#playerText');
const computerText = document.querySelector('#computerText');
const resultText = document.querySelector('#resultText');
const choiceButtons = document.querySelectorAll('.choiceButton');

let player;
let computer;
let result;

// On button click, this code runs
choiceButtons.forEach(button => button.addEventListener('click', () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

// A function to make the computer make a random choice
function computerTurn() {
    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1: computer = "ROCK";
            break;
        case 2: computer = "PAPER";
            break;
        case 3: computer = "SCISSORS";
            break;
    }
}

// A function to decide the winner 
function checkWinner() {
    if (player == computer) {
        return "Draw!!"
    }
    else if (computer == "ROCK") {
        return (player == "PAPER")? "You Win!" : "you Lose!"
    }
    else if (computer == "PAPER") {
        return (player == "SCISSORS")? "You Win!" : "you Lose!"
    }
    else if (computer == "SCISSORS") {
        return (player == "ROCK")? "You Win!" : "you Lose!"
    }
}