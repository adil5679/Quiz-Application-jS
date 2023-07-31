var dt = new Date(new Date().setTime(0));
var time = dt.getTime();
var seconds = Math.floor((time %(100 * 60))/1000);
var minutes = Math.floor((time %(1000 * 60 * 60))/(1000 * 60));

var timex = 0

setInterval(function(){
    if(seconds < 59){
        seconds++;
    }
    else{
        minutes++;
        seconds = 0;
    }
   var format_sec = seconds < 10 ? `0${seconds}`: `${seconds}` 
   var format_min =  seconds < 10 ? `0${minutes}`: `${minutes}`;
   document.querySelector(".time").innerHTML = `${format_min} : ${format_sec}`;

},1000)