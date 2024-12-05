let homeScore = document.getElementById("home-score");
let awayScore = document.getElementById("away-score");

let homePoints = 0;
let awayPoints = 0;



function add1PointHome(){
    homePoints += 1;
    homeScore.textContent = homePoints;
}

function add2PointsHome(){
    homePoints += 2;
    homeScore.textContent = homePoints;
}

function add3PointsHome(){
    homePoints += 3;
    homeScore.textContent = homePoints;
}

function add1PointAway(){
    awayPoints += 1;
    awayScore.textContent = awayPoints;
}

function add2PointsAway(){
    awayPoints += 2;
    awayScore.textContent = awayPoints;
}

function add3PointsAway(){
    awayPoints += 3;
    awayScore.textContent = awayPoints;
}