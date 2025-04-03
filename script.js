// Cole Dessicino 3/26/25

const option_1 = document.getElementById("option_1");
const option_2 = document.getElementById("option_2");
const option_3 = document.getElementById("option_3");
let image_you = document.getElementById("image_you");
let image_computer = document.getElementById("image_computer");
const rockid = document.getElementById("rock");
const paperid = document.getElementById("paper");
const scissorsid = document.getElementById("scissors");
const rockaiid = document.getElementById("rockai");
const paperaiid = document.getElementById("paperai");
const scissorsaiid = document.getElementById("scissorsai");
let _wins = document.getElementById("_wins");
let playerwins = document.getElementById("playerwins");
let cpuwins = document.getElementById("cpuwins");
let playerwins_value = 0;
let cpuwins_value = 0;

let clicksrock = 0;

option_1.addEventListener("click", chooserock);

// block disables none and none makes the image disappear
function chooserock() {
    clicksrock++;
    if( clicksrock == 1 ) {
        console.log("Rock");
        rockid.style.display = "block";
        paperid.style.display = "none";
        scissorsid.style.display = "none";
        clicksrock = 0
    }
}


let clickspaper = 0;

option_2.addEventListener("click", choosepaper);

function choosepaper() {
    clickspaper++;
    if( clickspaper == 1 ) {
        console.log("Paper");
        rockid.style.display = "none";
        paperid.style.display = "block";
        scissorsid.style.display = "none";
        clickspaper = 0
    }
}


let clicksscissors = 0;

option_3.addEventListener("click", choosescissors);

function choosescissors() {
    clicksscissors++;
    if( clicksscissors == 1 ) {
        console.log("scissors");
        rockid.style.display = "none";
        paperid.style.display = "none";
        scissorsid.style.display = "block";
        clicksscissors = 0;
    }
}


let clicks = 0;

option_1.addEventListener("click", computerpick)
option_2.addEventListener("click", computerpick)
option_3.addEventListener("click", computerpick)


// This picks a random number and that number causes the choice to appear
function computerpick() {
    cpuChoice = Math.floor(Math.random() * (3 - 1 + 1) ) + 1;
    clicks++;
    if( cpuChoice == 1 ) {
        console.log("cpu chose rock");
        rockaiid.style.display = "block";
        paperaiid.style.display = "none";
        scissorsaiid.style.display = "none";
    }
    else if( cpuChoice == 2 ) {
        console.log("cpu chose paper");
        rockaiid.style.display = "none";
        paperaiid.style.display = "block";
        scissorsaiid.style.display = "none";
    }
    else if( cpuChoice == 3 ) {
        console.log("cpu chose scissors");
        rockaiid.style.display = "none";
        paperaiid.style.display = "none";
        scissorsaiid.style.display = "block";
    }
}


let clicked = 0;
// let clickedpaper = 0;
// let clickedscissors = 0;

option_1.addEventListener("click", () => {
    thewinner(1)
})
option_2.addEventListener("click", () => {
    thewinner(2)
})
option_3.addEventListener("click", () => {
    thewinner(3)
})

function thewinner(PlayerChoice) {
    clicked++;
    if(PlayerChoice == cpuChoice) {
        winner = "Tie"
        clicked = 0;
    }
    else if(PlayerChoice == 1) {
        if (cpuChoice == 3) {
            winner = "Player Wins"
        }
        else 
            winner = "CPU Wins"
    }
    else if(PlayerChoice == 2) {
        if(cpuChoice == 1) {
            winner = "Player Wins"
        }
        else 
            winner = "CPU Wins"
    }
    else if(PlayerChoice == 3) {
        if(cpuChoice == 2) {
            winner = "Player Wins"
        }
        else 
            winner = "CPU Wins"
    }

    if(winner == "Player Wins") {
        playerwins_value++;
    }
    else if(winner == "CPU Wins") {
        cpuwins_value++;
    }

    _wins.innerHTML = winner;
    playerwins.innerHTML = "Player Score: " + playerwins_value;
    cpuwins.innerHTML = "CPU Score: " + cpuwins_value;
}