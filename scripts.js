// Write your JavaScript code here.
// Remember to pay attention to page loading!

let takeOff = null;
let landing = null;
let abortMission = null;
let up = null;
let down = null;
let left = null;
let right = null;

let rocketHeight = null;
let rocketImagePosition = null;


function init(){


    rocket.style.position = 'absolute';
    rocket.style.bottom = "0";
    rocket.style.left = "0";

    takeOff = document.getElementById("takeoff");
    landing = document.getElementById("landing");
    abortMission = document.getElementById("missionAbort");

    up = document.getElementById("Up");
    down = document.getElementById("Down");
    left = document.getElementById("Left");
    right = document.getElementById("Right");
    
    takeOff.addEventListener("click", function(event){
        
        // window confirm for take off button when clicked
        if (window.confirm("Confirm that the shuttle is ready for takeoff.") === true){
            
            // flight status text is changed to 'Shuttle in flight'
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            
            // background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            
            // shuttle height should increase by 10,000 miles
            document.getElementById("spaceShuttleHeight").innerHTML = "10000";
            
        }
    });
    
    landing.addEventListener("click", function(event){
        
        // window alert to let the user know the shuttle is landing
        if (window.confirm("The shuttle is landing. Landing gear engaged.") === true){
            
            // change flight status to the shuttle has landed
            document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
            
            // background color of the shuttle fligth should change from blue to green
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            
            // shuttle height should go to 0
            document.getElementById("spaceShuttleHeight").innerHTML = "0";

            // return shuttle to original position
            rocket.style.position = 'absolute';
            rocket.style.bottom = "0";
            rocket.style.left = "0";
            
        }
    });
    
    abortMission.addEventListener("click", function(event){
        
        // window alert to confirm mission abort
        if (window.confirm("Confirm that you want to abort the mission") === true){
            
            // change flight status to mission aborted
            document.getElementById("flightStatus").innerHTML = "Mission Aborted";
            
            // background color of the shuttle flight should change from blue to green
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            
            // shuttle height should go to 0
            document.getElementById("spaceShuttleHeight").innerHTML = "0";
            
            // return shuttle to original position
            rocket.style.position = 'absolute';
            rocket.style.bottom = "0";
            rocket.style.left = "0";
        }
        
    });

    up.addEventListener("click", function(event){
            rocketHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
            rocketHeight += 10000;
            document.getElementById("spaceShuttleHeight").innerHTML = rocketHeight;

            rocketImagePosition = parseInt(rocket.style.bottom);
            rocketImagePosition += 10;
            rocket.style.bottom = rocketImagePosition +'px';
        
    });
    
    down.addEventListener("click", function(event){
        rocketHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        rocketHeight -= 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = rocketHeight;

        rocketImagePosition = parseInt(rocket.style.bottom);
        rocketImagePosition -= 10;
        rocket.style.bottom = rocketImagePosition +'px';
    
    });
    
    left.addEventListener("click", function(event){
        rocketImagePosition = parseInt(rocket.style.left);
        rocketImagePosition -= 10;
        rocket.style.left = rocketImagePosition +'px';
    
    });

    right.addEventListener("click", function(event){
        rocketImagePosition = parseInt(rocket.style.left);
        rocketImagePosition += 10;
        rocket.style.left = rocketImagePosition +'px';
    
    });

    
}


window.onload = init;