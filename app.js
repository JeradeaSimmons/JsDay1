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
    restart = 0
    
    
    
}




