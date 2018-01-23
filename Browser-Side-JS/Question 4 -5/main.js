var load = document.querySelector("#load")
var button = document.querySelector("#button");
var body = document.querySelector("body");
var startButton = document.querySelector("#start");
var restart = document.querySelector("#restart")
var won = false;
button.style.display = "none"
restart.style.display = "none"
button.style.left = (100 + Math.random() * 400) + 'px';
button.style.top = (100 + Math.random() * 400) + 'px';

function checkClicked() {
    setTimeout(hasLost, 1500);
    button.style.display = "";
    startButton.style.display = "none";
    button.addEventListener('click', function () {
        load.innerHTML = "YOU WON!!";
        event.stopPropagation();
        won = true;
        restart.style.display = "";
       // restart();
    })
    body.addEventListener('click', function () {
        load.innerHTML = "You didnt click the button, YOU LOSE!!"
        restart.style.display = "";
       // restart();
        won = false;
    })

}
restart.addEventListener('click',function(){
        location.reload();
    })

function hasLost() {
    if (!won) {
        document.querySelector("#load").innerText = 'YOU WERE NOT FAST ENOUGH!!';
        restart.style.display = "";
        //restart()
        
    }
}
function start() {
    startButton.addEventListener('click', function () {
        event.stopPropagation();
        checkClicked();
        console.log("i clicked start");
    })
}


    
start();
