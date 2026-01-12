const MAXROUNDS = 5;
let rounds = 0;
let computerScore = 0;
let humanScore = 0;


function playGame() {
    
    if(computerScore > humanScore){
        console.log("COMPUTER WINS THIS ROUND! DOOOM")
    } else if(humanScore > computerScore){
        console.log("YOU WIN THIS ROUND")
    } else {
        console.log("DRAW! play again?")
    }
}

let computerChoice ;
function getComputer() {
        computerChoice = '';
        let weapons = ["rock","paper","scissors"];
        let index = Math.floor(Math.random() * weapons.length)
        computerChoice = weapons[index];
        console.log(`${computerChoice}`)
        return computerChoice;
}

let humanChoice ;


function playround() {
if (computerChoice === humanChoice)
    {
        console.log("Draw! Play again")
        return "Draw";
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors" ) ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper"
        )
        )
{
    console.log("Computer Wins");
    ++computerScore;
    return  "Computer Wins! You loose.";
} else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" & computerChoice === "paper")
    )
{
    console.log("You Win");
    ++humanScore;
return "You win! Computer looses.";
}

}





const buttons = document.querySelectorAll('.buttons')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    humanChoice = button.value; 
    console.log(humanChoice)   
    return humanChoice;   
})

button.addEventListener("click", getComputer)
button.addEventListener("click",playround);
button.addEventListener('click', () => {
    button.style.backgroundColor = 'red'
})


})

// function getHuman(str) {
//     str = prompt("Choose your weapon",'')
//     console.log(str)
//     return str;} 


