var n=123456;
var s="hello";
var b=true;
var o={name:"코뮤니티", age: 2};
var u;
function number(){
    console.log(typeof n);
    var p=document.getElementsByTagName('p')
    p[0].innerHTML="n의 타입은 \"number\"입니다.  javascript는 다른 언어와 다르게 정수와 실수를 따로 구분하지 않아요!"
}
function string(){
    console.log(typeof s);
    var p=document.getElementsByTagName('p')
    p[0].innerHTML="s의 타입은 \"string\"입니다. 큰 따옴표나 작은따옴표로 둘러싸인 문자의 잡합을 말해요."
}
function boolean(){
    console.log(typeof b);
    var p=document.getElementsByTagName('p')
    p[0].innerHTML="b의 타입은 \"boolean\"입니다. 불리언은 참과 거짓을 표현해요."
}
function object(){
    console.log(typeof o);
    var p=document.getElementsByTagName('p')
    p[0].innerHTML="o의 타입은 객체입니다. 객체는 키(key)와 값(value)으로 이루어져 있고, 키를 통해 그 값을 불러올 수 있어요."
}
function unDefined(){
    console.log(typeof u);
    var p=document.getElementsByTagName('p')
    p[0].innerHTML="u는 타입이 정해지지 않았기 때문에 \"undefined\"타입입니다. 이와 비슷하게 값이 정해지지 않은 것은 \"null\"이라고 해요."
}