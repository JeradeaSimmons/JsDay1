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

function endGameHome() {
    let codeElement = document.getElementById('endGameHome')
    if (
          homePoints > awayPoints
    ) {
        window.alert('Home Team Wins!') 
    
    }
    
}
function endGameAway() {
    let codeElement = document.getElementById(endGameAway)
    if (homePoints < awayPoints) {
        window.alert('Away Team Wins!')
    }
}
function endGameTie() {
    let codeElement = document.getElementById(endGameTie)
    if (homePoints == awayPoints) {
        window.alert('TIE!!')
    }
}