let homePoints= 0
let awayPoints= 0

let restart = 0




function TouchDownHome() {
    homePoints += 7
    let codeElement = document.getElementById('Home-Team')
    codeElement.innerText = homePoints
        
    console.log(homePoints);
}

function FieldGoalHome() {
    homePoints += 3
    let codeElement = document.getElementById('Home-Team')
    codeElement.innerText = homePoints
        
    console.log(homePoints);
}

function TouchDownAway() {
    awayPoints += 7
    let codeElement = document.getElementById('Away-Team')
    codeElement.innerText = awayPoints
        
    console.log(awayPoints);
}

function FieldGoalAway() {
    awayPoints += 3
    let codeElement = document.getElementById('Away-Team')
    codeElement.innerText = awayPoints
        
    console.log(awayPoints);
}

function StartOver() { 
    awayPoints = 0
    let codeElement = document.getElementById('Away-Team')
    codeElement.innerText = awayPoints
    
    
}

function StartOver1() { 
    homePoints = 0
    let codeElement = document.getElementById('Home-Team')
    codeElement.innerText = homePoints
    
    
}

function endGame() {
    let codeElement = document.getElementById('endGame')
    if (
          homePoints > awayPoints
    ) {
        window.alert('Home Team Wins!') 
    console.log();
    }
    else {
        window.alert('Away Team Wins!')
    }
    
}





