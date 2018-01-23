var won = false;

function listenForWin() {
    setTimeout(hasLost,500);
    document.querySelector("#load").innerText = 'STARTED!!';
    var bodyListener = document.querySelector('body');
    bodyListener.addEventListener('click', function () {
        document.querySelector("#load").innerText = 'YOU WON BY CLICKING!!';
        won = true;
    })
    bodyListener.addEventListener('keydown', e => {
        if (e.keyCode == 32) {
            document.querySelector("#load").innerText = 'YOU WON USING SPACEBAR!!';
            won = true;
        }
    })
}

function hasLost(){
         if(!won){
            document.querySelector("#load").innerText = 'YOU WERE NOT FAST ENOUGH!!';
         }
}
setTimeout(listenForWin, Math.floor((Math.random() * 3) + 1) * 1000);

