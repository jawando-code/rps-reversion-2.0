const MAXROUNDS = 5;
let rounds = 1;
let computerScore = 0;
let humanScore = 0;


const buttons = document.querySelectorAll('.buttons')
const roundDisp = document.querySelector(".rounds")
const roundPara = document.createElement('p');
const displayHuman = document.querySelector('.display2')
const displayCom = document.querySelector('.display')
const cr8Para = document.createElement('p')
const cr8Para2 = document.createElement('p')
const message = document.querySelector('.message')
const start = document.querySelector('.start');
const stats = document.querySelector('.stats')
const computerScoreDis = document.querySelector('.computerScore');
const humanScoreDis = document.querySelector('.humanScore');
    const display = document.querySelector('.display');



let computerChoice ;
let humanChoice ;
function getComputer() {
        computerChoice = '';
        let weapons = ["rock","paper","scissors"];
        let index = Math.floor(Math.random() * weapons.length)
        computerChoice = weapons[index];
        console.log(`${computerChoice}`)
        return computerChoice;
}


humanScoreDis.textContent = `You: ${humanScore}`
stats.appendChild(humanScoreDis)


computerScoreDis.textContent = `Computer: ${computerScore}`;
stats.appendChild(computerScoreDis);




function playround() {


if (computerChoice === humanChoice)
    {
        console.log("Draw! Play again");
        display.textContent = "Draw! Play again.";
        return "Draw";

    } else if (
        (computerChoice === "rock" && humanChoice === "scissors" ) ||
        (computerChoice === "paper" && humanChoice === "rock") ||
        (computerChoice === "scissors" && humanChoice === "paper"
        )
        )
{ 
        ++computerScore;
        console.log("Computer Wins");
        computerScoreDis.textContent = `Computer: ${computerScore}`;
        
stats.appendChild(computerScoreDis);
    display.textContent =`Computer Wins! ${computerChoice} beats ${humanChoice}!`;
    return  "Computer Wins! You loose.";
} else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" & computerChoice === "paper")
    )
{
     ++humanScore; 
    humanScoreDis.textContent = `You: ${humanScore}`
    stats.appendChild(humanScoreDis);
   display.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
   
}



humanScoreDis.textContent = `You: ${humanScore}`
stats.appendChild(humanScoreDis)
}

function fiveRounds() {
    
    humanScoreDis.textContent = `You: ${humanScore}`
    stats.appendChild(humanScoreDis);
    computerScoreDis.textContent = `Computer: ${computerScore}`;
    stats.appendChild(computerScoreDis); 
    newround.style.display = 'none';
    start.style.display = 'block';
    
      
    }

    // humanScore = 0;
    // computerScore = 0;
    // rounds = 0;
    

function playGame() {

    if(rounds === MAXROUNDS) {
        if(computerScore > humanScore) { 
            console.log("COMPUTER WINS THIS ROUND! DOOOM")
            message.textContent ="COMPUTER WINS THIS ROUND! DOOOM";
        } else if(humanScore > computerScore){
            console.log("YOU WIN THIS ROUND")
            message.textContent ="YOU WIN THIS ROUND"
        } else { 
            console.log("DRAW! play again?")
            message.textContent ="DRAW! Play again?"
        }
       fiveRounds(); 
    }
    
}


function disableButtons() {
        buttons.forEach(button => {
            button.disabled = true;
           
        })
}

function enableButtons() {
        buttons.forEach(button => {
            button.disabled = false;
        })
}


roundPara.textContent = `Round: ${rounds}`;
roundDisp.appendChild(roundPara);
const newround = document.getElementById('newround');

newround.addEventListener('click', () => {
     rounds++;
    newround.style.backgroundColor = 'grey';
    buttons.forEach((button) => {
        button.style.backgroundColor = '#4A0505'
    })
    })
 
newround.addEventListener('click', (event) => {
    enableButtons() })




buttons.forEach((button) => {
    button.addEventListener('click', () => {
    humanChoice = button.value;
    console.log(humanChoice)   
    return humanChoice;   
})





button.addEventListener("click", getComputer)
button.addEventListener("click",playround);
button.addEventListener("click",playGame);


button.addEventListener('click', () => {
    button.style.backgroundColor = 'red';

})
button.addEventListener('click', () => {
   
    roundPara.textContent = `Round: ${rounds}`;
    roundDisp.appendChild(roundPara);
})

button.addEventListener('click', (event) => {    
    disableButtons();
} )

    
    
})





start.addEventListener('click', () => {
    enableButtons();
    buttons.forEach((button) => {
        button.style.backgroundColor = '#4A0505'
    })
    humanScore = 0;
    humanScoreDis.textContent = `You: ${humanScore}`;
    
    computerScore = 0;
    computerScoreDis.textContent = `Computer: ${computerScore}`;
    rounds = 1;
    roundPara.textContent = `Round: ${rounds}`

    message.textContent = '';
    display.textContent = '';
    newround.style.display = 'block';
    
    start.style.display = 'none';
})