var img=document.getElementsByTagName('img');
var sp=document.getElementsByTagName('span');
function movie(title, release, story){
    this.title=title;
    this.release=release;
    this.story=story;
}
var notebook=new movie("노트북", "2004.11.26", "17살, ‘노아’는 밝고 순수한 ‘앨리’를 보고 첫눈에 반한다. 빠른 속도로 서로에게 빠져드는 둘. 그러나 이들 앞에 놓인 장벽에 막혀 이별하게 된다. 24살, ‘앨리’는 우연히 신문에서 ‘노아’의 소식을 접하고 잊을 수 없는 첫사랑 앞에서 다시 한 번 선택의 기로에 서게 되는데… 열일곱의 설렘, 스물넷의 아픈 기억, 그리고 마지막까지… ")
var taxi=new movie("택시운전사", "2017.08.02", "택시운전사 만섭(송강호)은 외국손님을 태우고 광주에 갔다 통금 전에 돌아오면 밀린 월세를 갚을 수 있는 거금 10만원을 준다는 말에 독일기자 피터(토마스 크레취만)를 태우고 영문도 모른 채 길을 나선다. 광주 그리고 사람들. “모르겄어라, 우덜도 우덜한테 와 그라는지…” 어떻게든 택시비를 받아야 하는 만섭의 기지로 검문을 뚫고 겨우 들어선 광주. 위험하니 서울로 돌아가자는 만섭의 만류에도 피터는 대학생 재식(류준열)과 황기사(유해진)의 도움 속에 촬영을 시작한다. 그러나 상황은 점점 심각해지고 만섭은 집에 혼자 있을 딸 걱정에 점점 초조해지는데…")
var outlaws=new movie("범죄도시", "2017.10.03", "2004년 서울… 하얼빈에서 넘어와 단숨에 기존 조직들을 장악하고 가장 강력한 세력인 춘식이파 보스 ‘황사장(조재윤 분)’까지 위협하며 도시 일대의 최강자로 급부상한 신흥범죄조직의 악랄한 보스 ‘장첸(윤계상 분)’. 대한민국을 뒤흔든 ‘장첸(윤계상 분)’ 일당을 잡기 위해 오직 주먹 한방으로 도시의 평화를 유지해 온 괴물형사 ‘마석도(마동석 분)’와 인간미 넘치는 든든한 리더 ‘전일만(최귀화 분)’ 반장이 이끄는 강력반은 나쁜 놈들을 한방에 쓸어버릴 끝.짱.나.는. 작전을 세우는데… 통쾌하고! 화끈하고! 살벌하게! 나쁜 놈들 때려잡는 강력반 형사들의 ‘조폭소탕작전’이 시작된다!")
function movie1(){

    sp[0].innerHTML=notebook.title;
    sp[1].innerHTML=notebook.release;
    sp[2].innerHTML=notebook.story;
    img[0].style.opacity="0.5";
    img[1].style.opacity="1";
    img[2].style.opacity="1";
}
function movie2(){
    sp[0].innerHTML=taxi.title;
    sp[1].innerHTML=taxi.release;
    sp[2].innerHTML=taxi.story;
    img[0].style.opacity="1";
    img[1].style.opacity="0.5";
    img[2].style.opacity="1";
}
function movie3(){
    sp[0].innerHTML=outlaws.title;
    sp[1].innerHTML=outlaws.release;
    sp[2].innerHTML=outlaws.story;
    img[0].style.opacity="1";
    img[1].style.opacity="1";
    img[2].style.opacity="0.5";
}