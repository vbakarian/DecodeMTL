var winner = document.getElementById("winner");
var body = document.querySelector('body');
var app = document.getElementById("app")
var gameover = document.getElementById("gameover")
var won = false;
var gameStarted = false;
var restart = document.getElementById("restart")
var container = document.getElementById("container")
var countdown = Math.floor(Math.random() * 7 + 2);
var audio = new Audio('game-start.wav');
var gameOver = new Audio('game-over.mp3')
console.log(countdown);
restart.style.display = "none";
gameover.style.display = "none"
body.addEventListener("keydown", e => {
    if (e.keyCode == 81 && !won && gameStarted) {
        winner.innerText = "PLAYER 1 WINS!"
        gameover.style.display = "";
        restartGame();
        container.removeChild(app);
        won = true;
    } else if ((e.keyCode == 81 && !won && !gameStarted)) {
        winner.innerText = "PLAYER 2 WINS, PLAYER 1 STARTED BEFORE THE BANG"
        gameover.style.display = "";
        gameOver.play();
        restartGame();
        container.removeChild(app);
        won = true;
    }
    if (e.keyCode == 80 && !won && gameStarted) {
        winner.innerText = "PLAYER 2 WINS!"
        gameover.style.display = "";
        restartGame();
        container.removeChild(app);

        won = true;
    } else if (e.keyCode == 80 && !won && !gameStarted) {
        countdown = 0;
        winner.innerText = "PLAYER 1 WINS, PLAYER 2 STARTED BEFORE THE BANG"
        gameover.style.display = "";
        gameOver.play();
        restartGame();
        container.removeChild(app);
        won = true;
    }
});

function runCountdown() {
    app.innerText = countdown--;
    if (countdown >= 0 && !won && !gameStarted) {
        setTimeout(runCountdown, 1000);
        console.log("im in here")
    } else if (!won) {
        audio.play();
        gameStarted = true;
        app.innerText = "GAME STARTED!!"
    }
}
function restartGame() {
    gameStarted = false;
    restart.style.display = "";
    restart.addEventListener('click', function () {
        location.reload();
    })
}

runCountdown();



