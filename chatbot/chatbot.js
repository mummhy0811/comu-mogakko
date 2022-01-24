var p=document.getElementsByTagName('p');


function check_text(){
    var value = document.getElementById("console").value;
	if(value == ""){
		alert("명령어를 입력하세요.");
	}
    else if(value == "멍멍" || value =="멍멍아"||value =="멍멍이"){
		alert("고양이 챗봇입니다.");
	}
	else{
		p[0].innerHTML=value;
    }
}
document.getElementById('send').addEventListener('click', check_text);