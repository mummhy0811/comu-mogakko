var x=5, y=3;
var ans=0;
function add(){
    console.log(x+y);
    var p=document.getElementsByTagName('p');
    ans=x+y;
    p[0].innerHTML="x+y="+ans;
}
function sub(){
    console.log(x-y);
    var p=document.getElementsByTagName('p');
    ans=x-y;
    p[0].innerHTML="x-y="+ans;
}
function mul(){
    console.log(x*y);
    var p=document.getElementsByTagName('p');
    p[0].innerHTML="x*y="+x*y;
}
function div1(){
    console.log(x/y);
    var p=document.getElementsByTagName('p');
    p[0].innerHTML="x+y="+x/y;
}
function div2(){
    console.log(x%y);
    var p=document.getElementsByTagName('p');
    p[0].innerHTML="x+y="+x%y;
}