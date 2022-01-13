var count=0;
function changeColor(){
    var h1=document.getElementsByTagName('h1');
    count++;
    h1[0].innerHTML="짱구에게 하트를 "+count+"번 주었어요.";
    var img=document.getElementsByTagName('img');
    if(count%3==0) img[0].src="./character/1.jpg"
    else if(count%3==1) img[0].src="./character/2.jpg"
    else if(count%3==2) img[0].src="./character/3.jpg"
    console.log("짱구에게 하트를 "+count+"번 주었어요.");
}
function clearnumber(){

    var h1=document.getElementsByTagName('h1');
    count=0;
    h1[0].innerHTML="짱구에게 하트를 0번 주었어요";
    var img=document.getElementsByTagName('img');
    img[0].src="./character/1.jpg"
    console.log("하트 수를 초기화 했어요.");
}