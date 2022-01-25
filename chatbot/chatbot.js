var p=document.getElementsByTagName('p');
var body=document.getElementsByTagName('body');
var img=document.getElementsByTagName('img');
function check_text(){
    var value = document.getElementById("console").value;
	/*
	if(value == ""){
		alert("명령어를 입력하세요.");
	}
    else if(value == "멍멍" || value =="멍멍아"||value =="멍멍이"){
		alert("고양이 챗봇입니다.");
	}
	else{
		p[0].innerHTML=value;
    }
	*/
	switch(value){
		case(""):
			alert("명령어를 입력하세요.");
			break;
		case("멍멍"): case("멍멍아"): case("멍멍이"):
			p[0].innerHTML="난 멍멍이가 아니야!";
			alert("고양이 챗봇입니다.");
			break;
		case("불꺼줘"): case("불 꺼줘"):
			p[0].innerHTML="잘 자";
			img[0].src="chatbot/잘시간.jpg";
			body[0].style.backgroundColor="#353535";
			break;
		case("불켜줘"): case("불 켜줘"):
			p[0].innerHTML="이불 밖은 위험해...";
			img[0].src="chatbot/이불.jpg";
			body[0].style.backgroundColor="#FFFFFF";
			break;
		case("너 싫어"): case("저리가"):
			p[0].innerHTML="너무해...";
			img[0].src="chatbot/삐짐.jpg";
			break;
		case("잘있어"): case("갈게"):
			p[0].innerHTML="진짜 갈거냥";
			img[0].src="chatbot/갈거냥.jpg";
			break;
		case("게임하자"):
			p[0].innerHTML="난 준비됐어!";
			img[0].src="chatbot/게임.jpg";
			break;
		case("놀러가자"): case("운동가자"): 
			p[0].innerHTML="따라와";
			img[0].src="chatbot/자전거.jpg";
			break;
		case("뽀뽀"):
			p[0].innerHTML="움먀";
			img[0].src="chatbot/볼.jpg";
			break;
		default:
			img[0].src="chatbot/cat.jpg";
			p[0].innerHTML=value;
			break;

	}
}
document.getElementById('send').addEventListener('click', check_text);