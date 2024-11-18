let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencomchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return options[random];
};

const drawgame = () => {
    msg.innerText = "Game was a draw. Play again!";
    msg.style.backgroundColor = "gray"; // Optional color for draw
};

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}.`;
        msg.style.backgroundColor = "green";
    } else {
        comScore++;
        compScorePara.innerText = comScore;  // Fixed typo here
        msg.innerText = `You lose! ${compChoice} beats your ${userchoice}.`;
        msg.style.backgroundColor = "#081b31";
    }
};

const playgame = (userchoice) => {
    const compChoice = gencomchoice();

    if (userchoice === compChoice) {
        drawgame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {  // Scissors case
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});
