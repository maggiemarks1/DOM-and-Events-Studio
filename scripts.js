// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {

    const takeoff = document.getElementById("takeoff")
    const land = document.getElementById("landing")
    const abortMission = document.getElementById("missionAbort")
    const rocket = document.getElementById("rocket")
    rocket.style.position = "absolute"
    rocket.style.bottom = "0px"
    rocket.style.left = "0px"
    const up = document.getElementById("up")
    const down = document.getElementById("down")
    const left = document.getElementById("left")
    const right = document.getElementById("right")
    
    let flightStatus = document.getElementById("flightStatus")
    let shuttleBackground = document.getElementById("shuttleBackground")
    let spaceShuttleHeight = document.getElementById("spaceShuttleHeight")
    takeoff.addEventListener('click', function () {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
        console.log(response)
        if (response === true) {
            flightStatus.innerHTML = 'shuttle in flight.'

            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = 10000

        }


    });  
    land.addEventListener('click', function () {
        let response = window.alert("The shuttle is landing. Landing gear engaged.")
        console.log(response)
            flightStatus.innerHTML = "The shuttle has landed."

            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0

    });  

    abortMission.addEventListener('click', function () {
        let response = window.confirm("Confirm that you want to abort the mission." )
        console.log(response)
        if (response === true) {
            flightStatus.innerHTML =  "Mission aborted."

            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = 0

        }


    });  
    up.addEventListener('click', function () {
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)+10000
        rocket.style.bottom = parseInt(rocket.style.bottom)+ 10 + "px"


    });       
    down.addEventListener('click', function () {
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML)-10000
        rocket.style.bottom = parseInt(rocket.style.bottom) - 10 + "px"
    });       
    right.addEventListener('click', function () {
        rocket.style.left = parseInt(rocket.style.left) + 10 + "px"
        
    });       
    left.addEventListener('click', function () {
        rocket.style.left = parseInt(rocket.style.left) - 10 + "px"
        
    });       
})
