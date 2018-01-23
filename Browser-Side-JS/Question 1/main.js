
var won = false;
var bodyListener = document.querySelector('body');
bodyListener.addEventListener('click',function(){
    document.querySelector("#load").innerText = 'YOU WON!!';
    won = true;
    
})

function waiting(){
    if(!won){
        
        document.querySelector("#load").innerText = 'YOU LOST!!';
    }
   
}
setTimeout(waiting,1000);
