var h=0, m=0, s=0, ms=0;
var sp=document.getElementsByTagName('span');
var timer;

function hour(){
    h=parseInt(sp[0].innerHTML);
    h++;
    sp[0].innerHTML=h>=10?h:"0"+h;
}
function minute(){
    m=parseInt(sp[1].innerHTML);
    m++;
    if(m==60){
        hour();
        m=0;
    }
    sp[1].innerHTML=m>=10?m:"0"+m;
}
function second(){
    s=parseInt(sp[2].innerHTML);
    s++;
    if(s==60){
        minute();
        s=0;
    }
    sp[2].innerHTML=s>=10?s:"0"+s;
}
function millisec(){
    ms=parseInt(sp[3].innerHTML);
    ms++;
    if(ms==100){
        second();
        ms=0;
    }
    sp[3].innerHTML=ms>=10?ms:"0"+ms;
}


function start(){
    timer=setInterval(millisec, 10);
}
function stop(){
    clearInterval(timer);
}
function reset(){
    stop();
    for(var i=0;i<4;i++){
        sp[i].innerHTML="00";
    }
}
