//the choices available to pick

const choices = ["rock", "paper", "scissors"];

let computerChoice;
let userChoice;

let gameStatus = document.querySelector('.gameStatus')

let userScore = document.querySelector('.userScore');
userScore.textContent = 0;

let computerScore = document.querySelector('.computerScore');
computerScore.textContent = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        userChoice = btn.textContent;
        computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === computerChoice) {
            gameStatus.textContent = ("Its a tie!")
        } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock")) {
            gameStatus.textContent = (`You win, ${userChoice} beats ${computerChoice}!`)
            userScore.textContent = ++(userScore.textContent);

        } else {
            gameStatus.textContent = (`You lose ${computerChoice} beats ${userChoice}!`)
            computerScore.textContent = ++(computerScore.textContent);
        };

    });

});

