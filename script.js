function makebubble(){

    var clutter = "";

for(var i=1; i<=133; i++){
    var rn = Math.floor(Math.random()*10)
    clutter +=  `<div class="bubble">${rn}</div> `
}
document.querySelector("#pbtm").innerHTML = clutter
}
makebubble()

var timer= 60;
function runtimer(){
   var timerint = setInterval(function() {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer
        }
       else(timerint)
        
    }, 1000);
}
runtimer()

var hitrn = 0;
function getNewHit(){
    hitrn  = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn
}
getNewHit();

 var score = 0
function increasescore(){
    score += 20;
    document.querySelector("#scoreval").textContent = score;
}
increasescore();

document.querySelector("#pbtm").addEventListener("click",function (dets){
    var clickednum = (Number(dets.target.textContent));
    if(clickednum === hitrn){
        increasescore();
        makebubble()
        getNewHit()
    }
});
