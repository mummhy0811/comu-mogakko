function call_click(){
    setTimeout(()=>{
        document.getElementById("phoneBook_screen").style.display="none";
        document.getElementById("callScreen").style.display="block";
    }, 1000)
}
function stop_click(){
    setTimeout(()=>{
        document.getElementById("phoneBook_screen").style.display="block";
        document.getElementById("callScreen").style.display="none";
    }, 1000)
}

document.getElementById('callButton').addEventListener('click', call_click);
document.getElementById('stopButton').addEventListener('click', stop_click);