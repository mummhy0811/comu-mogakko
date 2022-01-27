var p=document.getElementsByTagName('p');
var body=document.getElementsByTagName('body');
var img=document.getElementsByTagName('img');
let n=0, follow=0 ;

var app = document.getElementById('app');
var typewriter = new Typewriter(app, {
	loop: true
});

typewriter.typeString('도움이 필요하면 help를 보내주세요.')
	.pauseFor(1000)
	.deleteAll()
	.typeString('예시 명령어들을 알 수 있어요!')
	.pauseFor(1000)
	.deleteAll()
	.start();

function check_text(){
    let value = document.getElementById("console").value;

	if(value.includes("안녕") || value.includes("반가워")){
		img[0].src="chatbot/cat.jfif";
		p[0].innerHTML="만나서 반가워";
	}
	else if(value.includes("멍멍")){
		p[0].innerHTML="난 멍멍이가 아니야!";
		img[0].src="chatbot/삐짐.jpg";
		alert("고양이 챗봇입니다.");
	}
	else if(value.includes("불") && value.includes("꺼")){
		p[0].innerHTML="내 꿈 꿔";
		img[0].src="chatbot/잘시간.jpg";
		body[0].style.backgroundColor="#353535";
	}
	else if(value.includes("불") && value.includes("켜")){
		if(n % 2 == 0){ //장난치는
			n++;
			img[0].src="chatbot/불.jpg";
			p[0].innerHTML = "크와아아앙";
		}
		else{
			n++;
			p[0].innerHTML="이불 밖은 위험해...";
			img[0].src="chatbot/이불.jpg";
			body[0].style.backgroundColor="#FFFFFF";
		}
	}
	else if(value.includes("잘 있어")||value.includes("갈게")){
		p[0].innerHTML="진짜 갈거냥";
		img[0].src="chatbot/갈거냥.jpg";
	}
	else if(value.includes("게임")){
		p[0].innerHTML="난 준비됐어!";
		img[0].src="chatbot/게임.jpg";
	}
	else if(value.includes("운동") ){
		if(n % 2 == 0){ 
			n++;
			p[0].innerHTML="따라와";
			img[0].src="chatbot/자전거.jpg";
		}
		else{
			n++;
			p[0].innerHTML="훌라후프 같이 하쟈";
			img[0].src="chatbot/훌라후프.jpg";
		}
	}
	else if(value.includes("뽀뽀")){
		p[0].innerHTML="움먀";
		img[0].src="chatbot/볼.jpg";
	}
	else{
		img[0].src="chatbot/첫 화면.jpg";
		p[0].innerHTML="미안 무슨 뜻인지 모르겠어";
	}

	if(follow==0){//따라하기 코드
		if(value.includes("따라해")){
			follow=1;
			p[0].innerHTML="이제부터 말 따라할거다 냥!";
			img[0].src="chatbot/얄미운 고양이.jpg";
		}
	}
	else if(follow==1) { //따라하는 중인 코드
		if(value.includes("그만")){ 
			follow=0;
			p[0].innerHTML="이제 그만";
			img[0].src="chatbot/첫 화면.jpg";
		}
		else{
			p[0].innerHTML=value+" 메롱!!";
			img[0].src="chatbot/캐릭터.jpg";
		}
	}

	if(value.includes("help")){
		p[0].innerHTML="야옹이의 키워드에는 불 켜줘!, 불 꺼줘!, 운동, 뽀뽀, 따라해봐, 게임 등이 있습니다. 야옹이와 함께 즐거운 시간 보내세요!";
	}

}
function press_enter(){
	if (window.event.keyCode==13){
		check_text();
	}
}
document.getElementById('send').addEventListener('click', check_text);

