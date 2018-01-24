var hasWon = false;
var hasLost = false;
var app = document.getElementById("app");
var body = document.getElementById("main");
var restart = document.getElementById("restart");
var start = document.getElementById("start");


var numButtons = 1 + Math.floor(Math.random() * 10);

var buttons = [];
var btnClicked = 0;
restart.style.display = "none"
function createButtons() {
    var button = document.createElement("button");
    button.style.display = "none";
    button.style.position = "absolute";
    button.style.left = (100 + Math.random() * 400) + 'px';
    button.style.top = (100 + Math.random() * 400) + 'px';
    button.innerText = "Click me!!!";
    button.addEventListener('click', function () {
        event.stopPropagation();
        btnClicked++;
        button.style.display = "none"
        if(btnClicked === numButtons){
            win();
        }
    })
    buttons.push(button)
    body.appendChild(button)

}

for (var i = 0; i < numButtons; i++) {
    createButtons();
}
function beginRound() {
    app.innerHTML = "ROUND STARTED!! GO!!"
    buttons.forEach(btn => {
        btn.style.display = "";
    });
    body.addEventListener('click',function(){
        lost();
    })
    setTimeout(lost, 1000 + 400 * numButtons)
}

function win(){
    if (hasLost)return;
    hasWon = true;
    app.innerText = "YOU WON!! NICE!";
    restart.style.display = "";
}
function lost(){
    if (hasWon)return;
    hasLost = true;
    app.innerText = "TRY AGAIN!!"
}

start.addEventListener('click', function () {
    start.style.display = "none";
    setTimeout(beginRound, Math.random() * 2000 + 1000);
})  

restart.addEventListener('click',function(){
    location.reload();
})
