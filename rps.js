//the choices available to pick

const choices = ["rock", "paper", "scissors"];
let computerChoice;
let userChoice;
let userScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {

        userChoice = btn.textContent;
        computerChoice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === computerChoice) {
            alert("its a tie")
        } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "rock")) {
            alert("you win")
            
        } else {
            alert('you lose')
        };


    });
});

