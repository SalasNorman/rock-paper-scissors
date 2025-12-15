let humanScore = 0;
let computerScore = 0;

let computerChose = "";
let humanChose = "";
let compareHumanChoice = "";

// Computer Choice
function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3 + 1);

  if (randomNum === 1) {
    computerChose = "Rock";
  } else if (randomNum === 2) {
    computerChose = "Paper";
  } else {
    computerChose = "Scissor";
  }
}

// Human Choice
function getHumanChoice() {
  if (inc !== 5) {
  }
  humanChose = prompt("Enter your choice: Rock, Paper, Scissor");
  for (let i = 1; i <= 3; i++) {
    compareHumanChose(i);
    if (
      humanChose.localeCompare(compareHumanChoice, undefined, {
        sensitivity: "base",
      }) === 0
    ) {
      getComputerChoice();
      playRound(compareHumanChoice, computerChose);
    }
  }
}

// humanChose compare correctChoice
function compareHumanChose(i) {
  if (i === 1) {
    compareHumanChoice = "Rock";
  } else if (i === 2) {
    compareHumanChoice = "Paper";
  } else {
    compareHumanChoice = "Scissor";
  }
}

let inc = 1;

// Human vs Computer
function playRound(compareHumanChoice, computerChose) {
  while (inc <= 5) {
    if (compareHumanChoice === "Rock") {
      if (computerChose === "Paper") {
        computerScore += 1;
        alert(compareHumanChoice + " vs " + computerChose + " -Computer win");
      } else if (computerChose === "Scissor") {
        humanScore += 1;
        alert(compareHumanChoice + " vs " + computerChose + " -You win");
      } else if (computerChose === "Rock") {
        alert(compareHumanChoice + " vs " + computerChose + " -A tie");
      }
    }
    if (compareHumanChoice === "Paper") {
      if (computerChose === "Scissor") {
        computerScore += 1;
        alert(compareHumanChoice + " vs " + computerChose + " -Computer win");
      } else if (computerChose === "Rock") {
        humanScore += 1;
        alert(compareHumanChoice + " vs " + computerChose + " -You win");
      } else if (computerChose === "Paper") {
        alert(compareHumanChoice + " vs " + computerChose + " -A tie");
      }
    }
    if (compareHumanChoice === "Scissor") {
      if (computerChose === "Rock") {
        computerScore += 1;
        alert(compareHumanChoice + " vs " + computerChose + " -Computer win");
      } else if (computerChose === "Paper") {
        humanScore += 1;
        alert(compareHumanChoice + " vs " + computerChose + " -You win");
      } else if (computerChose === "Scissor") {
        alert(compareHumanChoice + " vs " + computerChose + " -A tie");
      }
    }
    inc++;
    getHumanChoice();
  }
}

getHumanChoice();

// Total Score
if (humanScore > computerScore) {
  alert("Human: " + humanScore + " vs Com:" + computerScore + " -You WIN!");
}
else if (humanScore < computerScore) {
  alert("Human:" + humanScore + " vs Com:" + computerScore + " -You F**KING LOSER!");
}
else {
  alert("Human:" + humanScore + " vs Com:" + computerScore + " -same!, LET'S F**K");
}
  
console.log(humanScore);
console.log(computerScore);
