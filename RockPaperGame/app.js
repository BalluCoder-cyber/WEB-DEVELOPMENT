let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".emoji");
const mss = document.querySelector("#mesg");
const userScorepara = document.querySelector("#userscore");
const comScorepara = document.querySelector("#compscore");

const genCompChoice = () => {
    const option = ["paper", "rock", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
}

const drawGame = () => {
    console.log("Game was draw.")
    mss.innerText = "Game draw";
    mss.style.backgroundColor="rgb(173, 125, 5)";
}

const showWin = (userWin,usrChoice,comChoice) => {
    if (userWin) {
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win");
        mss.innerText = `You win ${usrChoice} beats ${comChoice}`;
        mss.style.backgroundColor="rgb(8, 233, 41)";
    } else {
        compScore++
        comScorepara.innerText = compScore;
        console.log("you lose")
        mss.innerText = `you lose ${comChoice} beats ${usrChoice}`;
        mss.style.backgroundColor="rgb(191, 46, 46)";
        
    }

}
const playGame = (usrChoice) => {
    console.log("user choice =", usrChoice);
    const comChoice = genCompChoice();
    console.log("comp choice =", comChoice);

    if (usrChoice === comChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (usrChoice === "rock") {
            userWin = comChoice === "paper" ? false : true;
        } else if (usrChoice === "paper") {
            userWin = comChoice === "scissors" ? false : true;
        } else {
            userWin = comChoice === "rock" ? false : true;
        }
        showWin(userWin,usrChoice,comChoice);
    }
}



choices.forEach((emoji) => {
    emoji.addEventListener("click", () => {
        const usrChoice = emoji.getAttribute("id");
        playGame(usrChoice);
    })
})